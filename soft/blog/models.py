from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
from ckeditor.fields import RichTextField
from django.utils.text import slugify
class User(AbstractUser):
    email_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class Post(models.Model):
    author =  models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    slug = models.SlugField(blank=True, null=True)
    content = RichTextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save (self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save()
