from django.db import models

class CityModel(models.Model):

    name = models.CharField(max_length=50)
    population = models.IntegerField()