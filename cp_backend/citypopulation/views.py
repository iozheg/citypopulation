""" Handling request from app. 

CSRF check is skipped (@csrf_exempt) for simplicity.
For user management used Django auth system.
"""

import hashlib
import json

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from .models import CityModel

@csrf_exempt
def login_user(request):
    """ Logins user."""

    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            password = request.POST.get('password')
        except KeyError:
            return HttpResponse("username or password is not specified!")

    try:
        user = User.objects.get(username=username)
        password_hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
        user = authenticate(username=username, password=password_hash)
        if user is not None:
            login(request, user)
            return HttpResponse("user logged in")
        else:
            return HttpResponse("user or password is incorrect!")
    except User.DoesNotExist:
        return HttpResponse("no such user!")

@csrf_exempt
@login_required(login_url='/')
def logout_user(request):
    """ Logouts user. """

    logout(request)
    return HttpResponseRedirect('/')


@csrf_exempt
def register(request):
    """Registers new user."""

    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            password = request.POST.get('password')
        except KeyError:
            return HttpResponse("username or password is not specified!")

    try:
        user = User.objects.get(username=username)
        return HttpResponse("such user exists")
    except User.DoesNotExist:
        password_hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
        user = User.objects.create_user(
                        username=username,
                        password=password_hash
                    )
        login(request, user)
        return HttpResponse("user logged in")

@login_required(login_url='/')
def get_cities(request):
    """ Returns list of cities.

    User must be logged in.
    """
    if request.method == 'GET':
        cities = CityModel.objects.all()
        return HttpResponse(
            json.dumps(
                [{
                    'id': city.id,
                    'name':city.name,
                    'population':city.population
                } for city in cities]
            )
        )