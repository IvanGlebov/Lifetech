from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .models import *

admin.site.register(Event)
admin.site.register(Group)
admin.site.register(Child)
admin.site.register(Region)
admin.site.register(Volunteer)
admin.site.register(Orphanage)