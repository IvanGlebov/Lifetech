from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import *


class BasicUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = BasicUser
        fields = ('username', 'email')


class BasicUserChangeForm(UserChangeForm):

    class Meta:
        model = BasicUser
        fields = ('username', 'email')


class MemberForm(forms.Form):

    class Meta:
        model = Member
        fields = ['first_name', 'second_name', 'last_name', 'region']
