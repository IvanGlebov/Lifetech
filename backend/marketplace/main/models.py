from django.db import models
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


class Members(models.Model):
    """
    ФИО
    роль - в новую модель
    регион
    активные мероприятия
    пройденные мероприятия
    """
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    region = models.ForeignKey("Regions", on_delete=models.PROTECT)


class Child(models.Model):
    person = models.ForeignKey("Members")
    orphanage = models.Model("Orphanages")


class Events(models.Model):
    """
    название
    статус
    регион
    площадка
    детский дом
    спонсоры
    волонтёры
    """
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    region = models.ForeignKey("Regions", on_delete=models.PROTECT)
    organizer = models.ForeignKey("Organizers", on_delete=models.PROTECT)
    orphanage = models.ForeignKey("Orphanage", on_delete=models.PROTECT)


class Regions(models.Model):
    """
    название
    детские дома
    организаторы

    """
    title = models.CharField(max_length=100, db_index=True)


class Organizers(models.Model):
    title = models.CharField(max_length=100, db_index=True)


class Orphanages(models.Model):
    title = models.CharField(max_length=100)
    children = models.ManyToManyField("Child", )