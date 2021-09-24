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
    Человек
    --------
    ФИО
    регион
    """
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    region = models.ForeignKey("Regions", on_delete=models.PROTECT)


class Child(models.Model):
    """
    Воспитанник детдома
    -----------------
    человек - из таблицы MEMEBERS
    детский дом
    """
    person = models.ForeignKey("Members", on_delete=models.PROTECT)
    orphanage = models.Model("Orphanages")


class Volunteers(models.Model):
    """
    Волонтёр
    -----------
    человек
    активные мероприятия
    пройденные мероприятия
    """
    person = models.ForeignKey("Members", on_delete=models.PROTECT)
    active_events = models.ManyToManyField("Events")
    finished_events = models.ManyToManyField("Events")


class Events(models.Model):
    """
    Мероприятие
    ---------------
    название
    статус
    регион
    площадка
    детский дом
    спонсоры(?)
    волонтёры
    """
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    region = models.ForeignKey("Regions", on_delete=models.PROTECT)
    organizer = models.ForeignKey("Organizers", on_delete=models.PROTECT)
    orphanage = models.ForeignKey("Orphanage", on_delete=models.PROTECT)


class Regions(models.Model):
    """
    Регион
    ------------
    название
    детские дома
    """
    title = models.CharField(max_length=100, db_index=True)
    orphanages = models.ManyToManyField("Orphanages")


class Orphanages(models.Model):
    """
    Детский дом
    ---------
    название
    подконтрольные дети
    """
    title = models.CharField(max_length=100)
    children = models.ManyToManyField("Child")
    

class Organizers(models.Model):
    """
    Площадка
    ----------
    пока что не уверен в необходимости этой таблицы
    """
    title = models.CharField(max_length=100, db_index=True)
