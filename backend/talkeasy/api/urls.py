from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers, viewsets
from .serializers import UserViewSet
from . import views
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path(r'^', include(router.urls)),
    path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/messages/<int:sender>/<int:receiver>', views.message_list, name='message-detail'),
    path('api/messages/', views.message_list, name='message-list'),
]
