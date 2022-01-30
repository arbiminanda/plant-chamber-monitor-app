from rest_framework import serializers
from ChamberApp.models import Data,Photo

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model=Data 
        fields=('DataId','Date','Time','ChamberTemp','AmbientTemp','ChamberHum','ChamberLight','ChamberCO2','ChamberWater')

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Photo 
        fields=('PhotoId','Date','Time','Position','PhotoFileName')