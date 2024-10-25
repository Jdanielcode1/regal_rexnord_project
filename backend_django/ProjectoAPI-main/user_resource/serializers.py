from rest_framework import serializers
from user_resource.models import (
    PlayerUser, 
    ManagerUser, 
    PartidaFallingObjects, 
    PartidaEncontrarDiferencias 
)

# here is where aggregation takes place

class PlayerUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PlayerUser
        fields = ['id', 'password_hash', 'firstname', 'lastname', 'manager']
    
class ManagerUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ManagerUser
        fields = ['id', 'password_hash', 'firstname', 'lastname']

class PartidaFallingObjectsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PartidaFallingObjects
        fields = ['id', 'player', 'score', 'time_taken']

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'player': f'{instance.player.firstname} {instance.player.lastname} {instance.player.id}',
            'score': instance.score,
            'time_taken': instance.time_taken
        }

class PartidaEncontrarDiferenciasSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PartidaEncontrarDiferencias
        fields = ['id', 'player', 'maxtime', 'n_objects', 'time_taken', 'found_objects']

    def to_representation(self, instance):
        return {
            'id': instance.id, 
            'player': f'{instance.player.firstname} {instance.player.lastname} {instance.player.id}',
            'maxtime': instance.maxtime, 
            'n_objects': instance.n_objects, 
            'time_taken': instance.time_taken,
            'found_objects': instance.found_objects
        }