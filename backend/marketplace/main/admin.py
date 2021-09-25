from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import BasicUserCreationForm, BasicUserChangeForm
from .models import *

class BasicUserAdmin(UserAdmin):
    add_form = BasicUserCreationForm
    form = BasicUserChangeForm
    model = BasicUser
    list_display = ['email', 'username',]

admin.site.register(BasicUser, BasicUserAdmin)
admin.site.register(Member)
admin.site.register(Event)
admin.site.register(Child)
admin.site.register(Volunteer)
admin.site.register(Orphanage)