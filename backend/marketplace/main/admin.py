from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import BasicUserCreationForm, BasicUserChangeForm
from .models import BasicUser

class BasicUserAdmin(UserAdmin):
    add_form = BasicUserCreationForm
    form = BasicUserChangeForm
    model = BasicUser
    list_display = ['email', 'username',]

admin.site.register(BasicUser, BasicUserAdmin)