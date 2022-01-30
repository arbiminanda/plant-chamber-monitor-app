from django.db import models
import datetime

class Data(models.Model):
	DataId = models.AutoField(primary_key=True)
	Date = models.DateField(default=datetime.date.today)
	Time = models.TimeField(default=datetime.time)
	ChamberTemp = models.CharField(max_length=500)
	AmbientTemp = models.CharField(max_length=500)
	ChamberHum = models.CharField(max_length=500)
	ChamberLight = models.CharField(max_length=500)
	ChamberCO2 = models.CharField(max_length=500)
	ChamberWater = models.CharField(max_length=500)

class Photo(models.Model):
	PhotoId = models.AutoField(primary_key=True)
	Date = models.DateField(default=datetime.date.today)
	Time = models.TimeField(default=datetime.time)
	Position = models.CharField(max_length=500)
	PhotoFileName = models.CharField(max_length=500)
