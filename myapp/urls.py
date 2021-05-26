from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('gettoken', views.get_token, name='index'),
]