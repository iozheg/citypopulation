import hashlib

from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# Create your views here.

def login_user(request):
    return HttpResponse(
        "Recieved: username=" + request.POST.get('username')
        + " password=" + request.POST.get('password')
    )

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
        return HttpResponse("user created")
