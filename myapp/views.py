from django.http import HttpResponse
from django.shortcuts import render
import json

def index(request):
    return render(request, 'myapp/index.html')


def get_token(request):
     if request.method == 'POST':
        print("check")
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        return HttpResponse("Succ")