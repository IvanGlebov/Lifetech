from django.shortcuts import render, redirect
from django.http import JsonResponse
import json
from .models import *
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

