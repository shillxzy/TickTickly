from django.db import models

class Users(models.Model):
    username = models.CharField(max_length = 50, unique=True)
    password_hash = models.TextField(blank=False, null=False)
    email = models.EmailField(max_length = 50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Todos(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    title = models.CharField(max_length = 255)
    description = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField()





