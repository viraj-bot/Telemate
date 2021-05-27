from django.http import HttpResponse

from django.shortcuts import render
from django.conf import settings
from django.conf.urls.static import static


def index(request):
    print("request = "+request.POST.get('q','default'))
    return render(request, "index.html")
