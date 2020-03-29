from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User
from chatserver.models import Messages
from django.contrib.auth import authenticate

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class MessageSerializer(serializers.ModelSerializer):
    """For Serializing Message"""
    sender = serializers.SlugRelatedField(
        many=False, slug_field='username', queryset=User.objects.all())
    receiver = serializers.SlugRelatedField(
        many=False, slug_field='username', queryset=User.objects.all())

    class Meta:
        model = Messages
        fields = ['sender', 'receiver', 'message', 'timestamp']

class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")