from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from chatserver.models import Messages
from .serializers import MessageSerializer,CreateUserSerializer,UserSerializer,LoginUserSerializer
from rest_framework import viewsets, generics
from rest_framework.response import Response
from knox.models import AuthToken# Create your views here.

def message_list(request, sender=None, receiver=None):
    if request.method == 'GET':
        print(sender)
        print(receiver)
        messages = Messages.objects.filter(sender_id=sender, receiver_id=receiver,is_read=False)
        for message in messages:
            message.is_read=True
        print(messages)
        serializer = MessageSerializer(messages, many=True, context={'request': request})
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MessageSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
def message_view(request, sender, receiver):
    if request.method == "GET":
       messages=Messages.objects.filter(sender_id=sender,receiver_id=receiver) | Messages.objects.filter(sender_id=receiver,receiver_id=sender)
       serializer=MessageSerializer(messages,many=True, context={'request':request})
       return JsonResponse(serializer.data,safe=False)

class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })