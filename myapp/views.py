import requests
from django.http import HttpResponse
from django.shortcuts import render
import json
from django.conf import settings
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.api import FacebookAdsApi


def index(request):
    return render(request, 'myapp/index.html')


def get_token(request):
     if request.method == 'POST':
        print("check")
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)

        my_access_token = body.get("accessToken")
        params = {'fields': "name",
                  'access_token': my_access_token}

        res_insights = requests.get("https://graph.facebook.com/v10.0/me?", params)
        print(res_insights.status_code)

        return HttpResponse("Succ")