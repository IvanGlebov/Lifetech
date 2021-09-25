import json

from django.shortcuts import render
from .models import User
from django.http import JsonResponse
from django.contrib.auth import logout, password_validation
from django.core.exceptions import ValidationError
from .helpers import LoginSucceedResponse


# Create your views here.
def info(request):
    print(request.user)
    if not request.user.is_authenticated:
        return JsonResponse({'status': 'user-is-not-authenticated'})

    user: User = request.user
    return JsonResponse(user.to_dict())


def user_logout(request):
    # s_key = request.session.session_key
    # print(f'session: {s_key}')
    logout(request)

    return JsonResponse({'status': 'ok'})


def user_login(request):

    # username, password = request.POST.get('u'), request.POST.get('p')
    parsed = json.loads(request.body.decode())
    username = parsed['u']
    password = parsed['p']

    user = User.get_by_natural_key(username)

    if user is None or not user.check_password(password):
        return JsonResponse({'status': 'LoginFailedInvalidEmailOrPassword'})
    if not user.is_active:
        return JsonResponse({'status': 'LoginFailedUserIsDeactivated'})

    return LoginSucceedResponse(request, user)


def sign_up(request):
    parsed = json.loads(request.body.decode())

    email = parsed['email']
    name = parsed['name']
    last_name = parsed['lastName']
    password = parsed['password']

    # try: email_validator
    # try: phone_validator

    if User.get_by_natural_key(email) is not None:
        return JsonResponse({'status': 'already-registered'}, status=400)

    if not name:
        return JsonResponse({'status': 'name-required'}, status=400)

    if not last_name:
        return JsonResponse({'status': 'last-name-required'}, status=400)

    if not password:
        return JsonResponse({'status': 'password-required'}, status=400)

    try:
        password_validation.validate_password(password)
    except ValidationError as e:
        return JsonResponse({
            'status': 'password-validation-failed',
            'message': e.messages[0],
            'others': e.messages
        }, status=400)

    user = User(email=email)
    user.username = email
    user.last_name = last_name
    # user.name = name
    user.set_password(password)
    user.save()

    return LoginSucceedResponse(request, user)
