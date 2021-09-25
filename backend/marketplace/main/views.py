from django.shortcuts import render, redirect
from django.http import JsonResponse
import json
from .models import *
from .forms import *
from django.core.serializers import serialize


"""
отдать все мероприятия
отдать мероприятие по id
отдать детский дом по id
отдать пользователя по id
!!! создать по 1 пользователю
"""

# Create your views here.
def try_response(request):
    data = serialize("python", Member.objects.all())
    return JsonResponse(data, safe=False)


def try_index(request):
    return render(request, 'main/index.html')


def add_task(request):
    parsed = json.loads(request.body.decode())
    # print(parsed)

    new_task = Member(name=parsed['name'])
    new_task.description = parsed['description']

    new_task.save()
    return JsonResponse({
        'status': 'task-added'
    })


def list_tasks(request, page=0):
    members = Member.objects.all()
    page_size = 24
    return JsonResponse({
        'member': dict((member.id, member.to_short_dict()) for member in members),
    })


#------------------------------------------Views to finish-----------------------------------------


def get_events(request):
    data = serialize("python", Event.objects.all())
    return JsonResponse(data, safe=False)


def get_event(request):
    """

    :param request: event_id
    :return: объект события (единичный)
    """
    parsed = json.loads(request.body.decode)
    event_id = parsed.event_id
    event = Event.objects.get(pk=event_id)
    data = serialize("python", event)
    return JsonResponse(data, safe=False)



def register_basic_user(request):
    parsed = json.loads(request.body.decode)

    user = BasicUser.objects.create_user(username='',
                                 email='',
                                 password='')