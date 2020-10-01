
from django.contrib import admin
from django.urls import path, include
from blog.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact-now/', Contact.as_view()),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('post-post/', PostArticle.as_view()),
    path('update-post/', UpdatePost.as_view()),
]
