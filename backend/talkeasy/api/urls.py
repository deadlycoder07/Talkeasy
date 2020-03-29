from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers, viewsets
from . import views
router = routers.DefaultRouter()
from .views import RegistrationAPI,LoginAPI

urlpatterns = [
    path('', include(router.urls)),
    path('api/auth/', include('knox.urls')),
    path('api/messages/<int:sender>/<int:receiver>', views.message_list, name='message-detail'),
    path('api/messages/', views.message_list, name='message-list'),
    path('api/messagelist/<int:sender>/<int:receiver>',views.message_view,name='message_view'),
    path('api/auth/register/',RegistrationAPI.as_view()),
    path('api/auth/login/',LoginAPI.as_view()),
]
