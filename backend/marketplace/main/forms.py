from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import BasicUser


class BasicUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = BasicUser
        fields = ('username', 'email')


class BasicUserChangeForm(UserChangeForm):

    class Meta:
        model = BasicUser
        fields = ('username', 'email')