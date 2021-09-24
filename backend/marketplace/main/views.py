from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from django.core.serializers import serialize

# Create your views here.
def try_response(request):
    data = serialize("python", Member.objects.all())
    return JsonResponse(data, safe=False)

def try_index(request):
    return render(request, 'main/index.html')
