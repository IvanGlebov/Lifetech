from django.db import models

from datetime import datetime
from datetime import timedelta
from typing import Optional
from django.conf import settings
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import PermissionsMixin
from django.utils import timezone
from django.db.models import Q


class User(AbstractUser):
    role = models.CharField(max_length=50, default="Organizer")

    REQUIRED_FIELDS = ['role']

    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'

    def to_dict(self) -> dict:
        return {
            'id': self.id,

            'name': self.first_name,
            'lastName': self.last_name,
            'role': self.role,
            'username': self.username,
            'email': self.email,
            'isStaff': self.is_staff,
            'serverTime': timezone.now(),
        }

    @classmethod
    def get_by_natural_key(cls, username: str):
        if not username:
            return None

        username = username.lower()
        return get_user_model().objects.filter(
            Q(username=username) | Q(email=username)
        ).first()
