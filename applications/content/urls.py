from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'content'
urlpatterns = [
    path('docs/', views.Docs, name='docs'),
    path('python/django/', views.ContentPage_Django, name='django'),
    path('javascript/react/', views.ContentPage_React, name='react'),
]
