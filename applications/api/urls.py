from django.urls import path

from . import views


app_name = 'api'
urlpatterns = [
    # Demonstration of API
    path(f'test/excel', views.Test_Table.as_view(), name='test_excel'),
    path(f'test/json', views.Test_FactGenerator.as_view(), name='test_json'),
]
