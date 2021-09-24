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
    first_name = forms.CharField(max_length=50)
    second_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)
    region = forms.IntegerField()
