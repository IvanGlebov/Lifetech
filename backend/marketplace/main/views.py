from django.shortcuts import render

# Create your views here.
def try_index(request):
    return render(request, 'main/index.html')