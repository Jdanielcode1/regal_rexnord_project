"""game_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers 

from user_resource import views

router = routers.DefaultRouter() 
router.register(f'player_user', views.PlayerUserViewSet)
router.register(f'manager_user', views.ManagerUserViewSet) 
router.register(f'partida_falling_objects', views.PartidaFallingObjectsViewSet)
router.register(f'partida_econtrar_diferencias', views.PartidaEncontrarDiferenciasViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]
