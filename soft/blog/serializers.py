from allauth.account import app_settings as allauth_settings
from rest_framework import status
from rest_framework.exceptions import APIException
from django.utils.encoding import force_text
from rest_framework.views import exception_handler
import re

from rest_framework import serializers,exceptions
from rest_auth.serializers import LoginSerializer
from .models import *
from allauth.account.adapter import get_adapter
from rest_framework.authtoken.models import Token
from datetime import datetime
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model, authenticate
from .models import *
from django.contrib.auth.validators import ASCIIUsernameValidator


class Contact(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    company = serializers.CharField(required=False, allow_blank=True)
    phone = serializers.CharField(required=False, allow_blank=True)
    message = serializers.CharField()



class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    created = serializers.DateTimeField(source='created_at', format="%Y-%m-%d", read_only=True)
    updated = serializers.DateTimeField(source='updated_at', format="%Y-%m-%d", read_only=True)
    class Meta: 
        model = Post
        fields = ('title', 'content','author','created','updated')


class UpdatePost(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('title', 'content')

class Login(LoginSerializer):
    username = serializers.CharField(required=False, allow_blank=True)
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(style={'input_type': 'password'})

    def authenticate(self, **kwargs):
        return authenticate(self.context['request'], **kwargs)

    def _validate_email(self, email, password):
        user = None

        if email and password:
            user = self.authenticate(email=email, password=password)
        else:
            msg = _('Must include "email" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def _validate_username(self, username, password):
        user = None

        if username and password:
            user = self.authenticate(username=username, password=password)
        else:
            msg = _('Must include "username" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def _validate_username_email(self, username, email, password):
        user = None

        if email and password:
            user = self.authenticate(email=email, password=password)
        elif username and password:
            user = self.authenticate(username=username, password=password)
        else:
            msg = _('Must include either "username" or "email" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def validate(self, attrs):
        username = attrs.get('username')
        email = attrs.get('email')
        password = attrs.get('password')

        user = None

        if 'allauth' in settings.INSTALLED_APPS:
            from allauth.account import app_settings

            # Authentication through email
            if app_settings.AUTHENTICATION_METHOD == app_settings.AuthenticationMethod.EMAIL:
                user = self._validate_email(email, password)

            # Authentication through username
            elif app_settings.AUTHENTICATION_METHOD == app_settings.AuthenticationMethod.USERNAME:
                user = self._validate_username(username, password)

            # Authentication through either username or email
            else:
                user = self._validate_username_email(username, email, password)

        else:
            # Authentication without using allauth
            if email:
                try:
                    username = UserModel.objects.get(email__iexact=email).get_username()
                except UserModel.DoesNotExist:
                    pass

            if username:
                user = self._validate_username_email(username, '', password)

        # Did we get back an active user?
        if user:
            if not user.is_active:
                msg = _('User account is disabled.')
                raise CustomValidation(
                    'User account is disabled.',"error",status_code=status.HTTP_200_OK)

        else:
            msg = _('Unable to log in with provided credentials.')
            raise CustomValidation(
                   'Unable to log in with provided credentials.',"error",status_code=status.HTTP_200_OK)


        # If required, is the email verified?
        if 'rest_auth.registration' in settings.INSTALLED_APPS:
            from allauth.account import app_settings
            if app_settings.EMAIL_VERIFICATION == app_settings.EmailVerificationMethod.MANDATORY:
                email_address = user.emailaddress_set.get(email=user.email)
                if not email_address.verified:
                    raise CustomValidation('E-mail is not verified.',"error",status_code=status.HTTP_200_OK)

        attrs['user'] = user
        return attrs


class PasswordResetSerializer(serializers.Serializer):
    """
    Serializer for requesting a password reset e-mail.
    """
    email = serializers.EmailField()

    password_reset_form_class = PasswordResetForm

    def get_email_options(self):
        """Override this method to change default e-mail options"""
        return {}


    def validate_email(self, value):
        # Create PasswordResetForm with the serializer
        self.reset_form = self.password_reset_form_class(data=self.initial_data)
        if not self.reset_form.is_valid():
            raise serializers.ValidationError(self.reset_form.errors)
        if not get_user_model().objects.filter(email=value).exists():
            raise CustomValidation('Account not found',"error",status_code=status.HTTP_200_OK)
        return value

    def save(self):
        request = self.context.get('request')
        # Set some values to trigger the send_email method.
        opts = {
            'use_https': request.is_secure(),
            'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
            'request': request,
        }

        opts.update(self.get_email_options())
        self.reset_form.save(**opts)

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'


class CustomValidation(APIException):
        status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        default_detail = 'A server error occurred.'

        def __init__(self, detail, field, status_code):
            if status_code is not None:self.status_code = status_code
            if detail is not None:
                self.detail = {field: force_text(detail)}
            else: self.detail = {'error': force_text(self.default_detail)}






class TokenSerializer(serializers.ModelSerializer):
    user_detail = serializers.SerializerMethodField()
   
    
    class Meta:
        model= Token 
        fields = ('key','user','user_detail')

    def get_user_detail(self, obj):
        serializer_data = UserSerializer(obj.user).data
        usern =  serializer_data.get('username')
        user = User.objects.get(username=usern)
        is_staff = serializer_data.get('is_staff')
        username = serializer_data.get('username')
        email = serializer_data.get('email')
        email_verified = serializer_data.get('email_verified')
        
            
            
        return{
            'is_staff': is_staff,
            'email': email,
            'username': username,
            
            
        }
