
import os
from corsheaders.defaults import default_headers
from decouple import config
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'esn5%4!*8j9^=4wv&wbhvzjnrlhbqy27!r*ta!+62spu*z1_2@'

# SECURITY WARNING: don't run with debug turned on in production!


ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    "bootstrap_admin",
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
   'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'corsheaders',
    'rest_auth',
    'rest_auth.registration',
    'rest_framework',
    'rest_framework.authtoken',
    'blog'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'soft.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'soft.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases



# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
}

ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
ACCOUNT_EMAIL_REQUIRED = True
AUTH_USER_MODEL = 'blog.User'
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_UNIQUE_USERNAME = False


REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER':'blog.serializers.UserSerializer',
    'TOKEN_SERIALIZER':'blog.serializers.TokenSerializer',
    'LOGIN_SERIALIZER': 'blog.serializers.Login'
    
}


CORS_ALLOW_HEADERS = list(default_headers) + [
    'X-CSRFTOKEN',
]

OLD_PASSWORD_FIELD_ENABLED = True
SIMPLE_HISTORY_HISTORY_CHANGE_REASON_USE_TEXT_FIELD=True

ACCOUNT_ADAPTER = 'blog.accountadapter.CustomAccountAdapter'
CUSTOM_ACCOUNT_CONFIRM_EMAIL_URL = "/verifyemail/{0}"