from django.contrib.auth import login
from django.core.exceptions import ValidationError
from django.http import JsonResponse

from users.models import User


class LoginSucceedResponse(JsonResponse):
    def __init__(self, request, user: User):
        login(request, user)
        self.__request = request
        super().__init__(user.to_dict())

    def close(self):
        super().close()


# def validate_and_normalize_phone(orig_phone: str):
#     # Phone is required
#     if orig_phone is None:
#         raise ValidationError('Phone is required', code='phone-validation-failed')
#
#     # Remove spaces from string
#     p = orig_phone.replace(' ', '')
#
#     # Add leading `+` if not there
#     if not p.startswith('+'):
#         p = '+' + p
#
#     # Validate by re. Throw ValidationException if not passed.
#     phone_validator(p)
#
#     return p