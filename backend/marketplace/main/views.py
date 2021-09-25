from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import *
from .forms import *
from django.core.serializers import serialize

# Create your views here.
def try_response(request):
    data = serialize("python", Member.objects.all())
    return JsonResponse(data, safe=False)


def try_add_member(request):
    if request.method == 'POST':
        form = MemberForm(request.POST)
        print(form)
        member = Member.objects.create(form)
        return redirect(member)
    data = serialize("python", Member.objects.all())
    return JsonResponse(data, safe=False)


def try_index(request):
    return render(request, 'main/index.html')
