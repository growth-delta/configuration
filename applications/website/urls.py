from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'website'
urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    # React Frontend Examples
    path('react/app/', views.Example_React_App, name='react_app'),
    path('react/component/', views.Example_React_Component, name='react_component'),
]
