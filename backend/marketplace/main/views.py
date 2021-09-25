from django.shortcuts import render, redirect
from django.http import JsonResponse
import json
from .models import *
from .forms import *
from django.core.serializers import serialize


"""
отдать все мероприятия
отдать мероприятие по id
создать аккаунт ребенка!!! создать по 1 пользователю
"""

#------------------------------------------Views to finish-----------------------------------------


def get_events(request):
    """
    работает
    """
    events = Event.objects.all()
    return JsonResponse({
        'events': dict((event.id, event.to_short_dict()) for event in events)
    })


def get_event(request):
    """
    РАБОТАЕТ
    :param request: event_id
    :return: объект события (единичный)
    """
    parsed = json.loads(request.body.decode())
    event_id = parsed['event_id']
    event = Event.objects.get(pk=event_id)
    return JsonResponse(event.to_short_dict())


def register_basic_user(request):
    parsed = json.loads(request.body.decode)
    first_name = parsed['first_name']
    second_name = parsed['second_name']
    last_name = parsed['last_name']
    region = parsed['region']
    if parsed['user_group'] == "Волонтёр":
        user_group = parsed['user_group']
    elif parsed['user_group'] == "Сотрудник":
        try:
            user_group = Orphanage.objects.get(parsed['user_group'])
        except:
            return JsonResponse({
                'exception': 'Неверный ключ организации, попробуйте снова'
            })
    user = BasicUser.objects.create_user(
        first_name=first_name,
        second_name=second_name,
        last_name=last_name,
        region=region,
        user_group=user_group
    )
    return JsonResponse({
        'status': 'registration done!'
    })


def register_ward(request):
    """

    :param request: first, second, last names; region, orphanage_id
    :return:
    """
    parsed = json.loads(request.body.decode)
    first_name = parsed.first_name
    second_name = parsed.second_name
    last_name = parsed.last_name
    region = parsed.region
    orphanage = Orphanage.objects.get(parsed.orphanage_id)
    user_group = "Подопечный"
    user = BasicUser.objects.create_user(
        first_name=first_name,
        second_name=second_name,
        last_name=last_name,
        region=region,
        user_group=user_group
    )
    return JsonResponse({
        'status': 'registration done!'
    })