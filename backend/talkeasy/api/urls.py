from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers, viewsets
from . import views
from rest_framework_jwt.views import obtain_jwt_token

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('api/auth/', include('knox.urls')),
    path('api/messages/<int:sender>/<int:receiver>', views.message_list, name='message-detail'),
    path('api/messages/', views.message_list, name='message-list'),
    path('api/messagelist/<int:sender>/<int:receiver>',views.message_view,name='message_view'),
    path('api/token/',obtain_jwt_token),

]
