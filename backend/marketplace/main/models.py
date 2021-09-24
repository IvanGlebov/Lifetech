from django.db import models
from django.contrib.auth.models import AbstractUser

""" STRUCTURE
РОЛИ:
детский дом
воспитанник
волонтёр
---------------
модели
Определяем новго пользователя

участник
воспитанник - от участника
мероприятие
регион
площадка
детский дом
"""
class BasicUserManager(BaseException):
    """
    непонятно, как достать регион из уже сделанной модели
    в душе не знаю, как это на самом деле должно рабоать, уверен, уже написанное развалится быстрее,
    чем успеем запустить.
    Можно считать, что набросал примерный макет базового юзера
    """
    def create_user(self, first_name, second_name, last_name, email, region, password=none):

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            second_name=second_name,
            last_name=last_name,
            region=region
        )

        user.set_password(password)
        user.save(user=self._db)

class BasicUser(AbstractUser):
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    region = models.ForeignKey("Region", on_delete=models.PROTECT, db_index=True)
    email = models.CharField(max_length=50, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'second_name', 'last_name', 'email', 'region',]




'''
class Child(models.Model):
    """
    Воспитанник детдома
    -----------------
    человек - из таблицы MEMBERS
    детский дом
    """
    person = models.ForeignKey("Member", on_delete=models.PROTECT)
    orphanage = models.Model("Orphanage")


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
    finished_events = models.ManyToManyField("Event")

'''
class Event(models.Model):
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
    region = models.ForeignKey("Region", on_delete=models.PROTECT)
    organizer = models.ForeignKey("Organizer", on_delete=models.PROTECT)
    orphanage = models.ForeignKey("Orphanage", on_delete=models.PROTECT)



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
    children = models.ManyToManyField("Child")


class Organizer(models.Model):
    """
    Площадка
    ----------
    пока что не уверен в необходимости этой таблицы
    """
    title = models.CharField(max_length=100, db_index=True)


