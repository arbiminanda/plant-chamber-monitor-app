from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from ChamberApp.models import Data,Photo
from ChamberApp.serializers import DataSerializer,PhotoSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def dataApi(request,id=0):
    if request.method=='GET':
        data = Data.objects.all()
        data_serializer=DataSerializer(data,many=True)
        return JsonResponse(data_serializer.data,safe=False)
    elif request.method=='POST':
        data_post=JSONParser().parse(request)
        data_serializer=DataSerializer(data=data_post)
        if data_serializer.is_valid():
            data_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        data_put=JSONParser().parse(request)
        data=Data.objects.get(DataId=data_put['DataId'])
        data_serializer=DataSerializer(data,data=data_put)
        if data_serializer.is_valid():
            data_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        data=Data.objects.get(DataId=id)
        data.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def photoApi(request,id=0):
    if request.method=='GET':
        photo = Photo.objects.all()
        photo_serializer=PhotoSerializer(photo,many=True)
        return JsonResponse(photo_serializer.data,safe=False)
    elif request.method=='POST':
        photo_post=JSONParser().parse(request)
        photo_serializer=PhotoSerializer(data=photo_post)
        if photo_serializer.is_valid():
            photo_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        photo_put=JSONParser().parse(request)
        photo=Photo.objects.get(PhotoId=photo_put['PhotoId'])
        photo_serializer=PhotoSerializer(photo,data=photo_put)
        if photo_serializer.is_valid():
            photo_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        photo=Photo.objects.get(PhotoId=id)
        photo.delete()
        return JsonResponse("Deleted Successfully",safe=False)
        
@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)