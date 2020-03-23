from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from chatserver.models import Messages
from .serializers import MessageSerializer
# Create your views here.
@csrf_exempt
def message_list(request, sender=None, receiver=None):
    if request.method == 'GET':
        print(sender)
        print(receiver)
        messages = Messages.objects.filter(sender_id=sender, receiver_id=receiver)
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
