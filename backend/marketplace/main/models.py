from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

"""
РОЛИ:
детский дом
воспитанник
волонтёр
---------------
модели

участник
воспитанник - от участника
мероприятие
регион
площадка
детский дом
"""


class BasicUser(AbstractUser):
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    region = models.ForeignKey("Region", on_delete=models.PROTECT, null=True)
    user_group = models.ForeignKey('Group', on_delete=models.PROTECT, blank=False)

    def to_short_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'second_name': self.second_name,
            'last_name': self.last_name,
            'region': self.region.to_short_dict(),
            'user_group': self.user_group.to_short_dict()
        }


class Group(models.Model):
    # Voulonteer
    # Child
    # Orphanage
    name = models.CharField(max_length=50)

    def to_short_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Child(models.Model):
    """
    Воспитанник детдома
    -----------------
    человек - из таблицы MEMBERS
    детский дом
    """
    person = models.ForeignKey("BasicUser", on_delete=models.PROTECT)
    orphanage = models.ForeignKey("Orphanage", on_delete=models.PROTECT)


class Volunteer(models.Model):
    """
    Волонтёр
    -----------
    человек
    активные мероприятия
    пройденные мероприятия
    """
    person = models.ForeignKey("BasicUser", on_delete=models.PROTECT)
    active_events = models.ManyToManyField("Event")


class Event(models.Model):
    """
    Мероприятие
    ---------------
    название
    описание
    картинка
    статус
    регион
    площадка
    волонтёры
    """
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    region = models.ForeignKey("Region", on_delete=models.PROTECT)


class Region(models.Model):
    """
    Регион
    ------------
    название
    детские дома
    """
    title = models.CharField(max_length=100, db_index=True)
    orphanages = models.ManyToManyField("Orphanage")

    def to_short_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            # orphanages dict
        }


class Orphanage(models.Model):
    """
    Детский дом
    ---------
    название
    подконтрольные дети (?)
    """
    title = models.CharField(max_length=100)
    secret_key = models.CharField(max_length=50, unique=True)


