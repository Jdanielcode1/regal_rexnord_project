from django.db import models

# Create your models here.
class ManagerUser(models.Model):
    password_hash = models.CharField(max_length=512)
    firstname = models.CharField(max_length=32)
    lastname = models.CharField(max_length=32)

class PlayerUser(models.Model):
    password_hash = models.CharField(max_length=512)
    firstname = models.CharField(max_length=32)
    lastname = models.CharField(max_length=32)
    manager = models.ForeignKey(ManagerUser, on_delete=models.CASCADE)

class PartidaFallingObjects(models.Model):
    player = models.ForeignKey(PlayerUser, on_delete=models.CASCADE)
    score = models.IntegerField(null=False)
    time_taken = models.FloatField(null=False)

class PartidaEncontrarDiferencias(models.Model):
    player = models.ForeignKey(PlayerUser, on_delete=models.CASCADE)
    maxtime = models.IntegerField(null=False)
    n_objects = models.IntegerField(null=False)
    time_taken =  models.IntegerField(null=False)
    found_objects = models.IntegerField(null=False)    