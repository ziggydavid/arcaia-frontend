from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    email_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username
        
class Post(models.Model):
    author =  models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    content = models.TextField()

    def __str__(self):
        return self.title