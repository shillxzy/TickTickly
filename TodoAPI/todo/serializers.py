from rest_framework import serializers
from .models import Users, Todos

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'username', 'email')

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todos
        fields = '__all__'

