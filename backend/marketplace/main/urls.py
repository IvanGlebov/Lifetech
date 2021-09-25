from django.urls import path
from .views import *

urlpatterns = [
    path('events/list/', get_events),
    path('events/object', get_event),
    path('users/', register_basic_user)
]