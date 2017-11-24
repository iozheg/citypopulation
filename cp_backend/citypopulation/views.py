from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def login(request):
    return HttpResponse(
        "Recieved: username=" + request.POST.get('username')
        + " password=" + request.POST.get('password')
    )

@csrf_exempt
def register(request):
    if request.method == 'GET':
        raise Http404("Wrong GET")

    return HttpResponse(
        "Recieved: username=" + request.POST.get('username')
        + " password=" + request.POST.get('password')
    )
