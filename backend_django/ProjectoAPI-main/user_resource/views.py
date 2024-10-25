import django
from rest_framework import viewsets, permissions
from rest_framework.response import Response

from user_resource.serializers import (
    ManagerUserSerializer, 
    PlayerUserSerializer, 
    PartidaEncontrarDiferenciasSerializer,
    PartidaFallingObjectsSerializer
)

from user_resource.models import (
    ManagerUser, 
    PlayerUser,
    PartidaFallingObjects, 
    PartidaEncontrarDiferencias
)

def get_user_fullname(id):
    """changes id of player user for the name of the player"""
    print(id)
    return id 

# Create your views here.

class ManagerUserViewSet(viewsets.ModelViewSet):
    queryset = ManagerUser.objects.all()
    serializer_class = ManagerUserSerializer
    permission_classes = []

class PlayerUserViewSet(viewsets.ModelViewSet):
    queryset = PlayerUser.objects.all()
    serializer_class = PlayerUserSerializer
    permission_classes = []
    
class PartidaFallingObjectsViewSet(viewsets.ModelViewSet):    
    queryset = PartidaFallingObjects.objects.all()
    serializer_class = PartidaFallingObjectsSerializer
    permission_classes = []

class PartidaEncontrarDiferenciasViewSet(viewsets.ModelViewSet):
    queryset = PartidaEncontrarDiferencias.objects.all()
    serializer_class = PartidaEncontrarDiferenciasSerializer
    permission_classes = []
