import hashlib
import json

from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from .models import CityModel

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            password = request.POST.get('password')
        except Exception:
            raise Http404("username or password is not specified!")

    try:
        user = User.objects.get(username=username)
        hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
        user = authenticate(username=username, password=hash)
        if user is not None:
            login(request, user)
            return HttpResponse("user logged in")
        else:
            raise Http404("user or password incorrect!")
    except User.DoesNotExist:
        raise Http404("no such user!")

@csrf_exempt
@login_required(login_url='/')
def logout_user(request):
    logout(request)
    return HttpResponseRedirect('/')


@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            password = request.POST.get('password')
        except Exception:
            raise Http404("username or password is not specified!")

    try:
        user = User.objects.get(username=username)
        return HttpResponse("user exists")
    except User.DoesNotExist:
        hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
        user = User.objects.create_user(username=username, password=hash)
        login(request, user)
        return HttpResponse("user logged in")

#@login_required(login_url='/')
def get_cities(request):
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