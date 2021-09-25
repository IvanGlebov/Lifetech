from django.urls import path
from .views import *

urlpatterns = [
    path('', try_index, name='home'),
    path('request/', try_response),
]