
from django.contrib import admin
from django.urls import path, include,re_path
from blog.views import *
from django.views.generic import TemplateView

urlpatterns = [
    path('deezi/', admin.site.urls),
    path('contact-now/', Contact.as_view()),
    path('blogs/', PostList.as_view()),
    path('blog-detail', PostDetail.as_view()),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('post-post/', PostArticle.as_view()),
    path('update-post/', UpdatePost.as_view()),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]
