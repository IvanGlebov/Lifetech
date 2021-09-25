from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('sign_up/', sign_up),
    path('log_in/', user_login),
    path('is_authorized', info),
    path('log_out', user_logout)

]