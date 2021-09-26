from django.db import models
from users.models import *
from django.contrib.auth.models import AbstractUser, UserManager

"""
TODO:
решить, в каком виде будет осуществляться связь с пользователем:
скорее всего каждая модель будет связана с пользователем (one_to_one?)
во вьюхах сложно, скорее всего тоже надо импорить, хотя тогда непонятно, что с юрлами


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
    person = models.ForeignKey("users.User", on_delete=models.PROTECT)
    orphanage = models.ForeignKey("Orphanage", on_delete=models.PROTECT)


class Volunteer(models.Model):
    """
    Волонтёр
    -----------
    человек
    активные мероприятия
    пройденные мероприятия
    """
    person = models.ForeignKey("users.User", on_delete=models.PROTECT)
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

    def to_short_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'status': self.status,
            'region': self.region.to_short_dict()
        }


class Region(models.Model):
    """
    Регион
    ------------
    название
    детские дома
    """
    title = models.CharField(max_length=100, db_index=True)
    orphanages = models.ManyToManyField("Orphanage", blank=True)

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


