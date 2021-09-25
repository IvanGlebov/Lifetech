from django.db import models
from django.contrib.auth.models import AbstractUser
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
    email = models.EmailField(unique=True)
    

    USERNAME_FIELD = 'email'


class Member(models.Model):
    """
    Человек
    --------
    ФИО
    регион
    """
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    region = models.ForeignKey("Region", on_delete=models.PROTECT, null=True)

    def to_short_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'second_name': self.second_name,
            'last_name': self.last_name,
            'region': self.region
        }


class Child(models.Model):
    """
    Воспитанник детдома
    -----------------
    человек - из таблицы MEMBERS
    детский дом
    """
    person = models.ForeignKey("Member", on_delete=models.PROTECT)
    orphanage = models.ForeignKey("Orphanage", on_delete=models.PROTECT)


class Volunteer(models.Model):
    """
    Волонтёр
    -----------
    человек
    активные мероприятия
    пройденные мероприятия
    """
    person = models.ForeignKey("Member", on_delete=models.PROTECT)
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
    organizer = models.ForeignKey("Organizer", on_delete=models.PROTECT)


class Region(models.Model):
    """
    Регион
    ------------
    название
    детские дома
    """
    title = models.CharField(max_length=100, db_index=True)
    orphanages = models.ManyToManyField("Orphanage")


class Orphanage(models.Model):
    """
    Детский дом
    ---------
    название
    подконтрольные дети
    """
    title = models.CharField(max_length=100)


class Organizer(models.Model):
    """
    Площадка
    ----------
    пока что не уверен в необходимости этой таблицы
    """
    title = models.CharField(max_length=100, db_index=True)
