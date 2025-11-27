from django.contrib import admin
from django.urls import path
from cars import views

urlpatterns = [
    path('', views.main, name='main'),
    path('catalog/', views.catalog, name='catalog'),
    path('about/', views.about, name='about'),
    path('contacts/', views.contacts, name='contacts'),
]