from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User
from chatserver.models import Messages
from django.contrib.auth import authenticate

class MessageSerializer(serializers.ModelSerializer):
    """For Serializing Message"""
    sender = serializers.SlugRelatedField(
        many=False, slug_field='username', queryset=User.objects.all())
    receiver = serializers.SlugRelatedField(
        many=False, slug_field='username', queryset=User.objects.all())

    class Meta:
        model = Messages
        fields = ['sender', 'receiver', 'message', 'timestamp']

