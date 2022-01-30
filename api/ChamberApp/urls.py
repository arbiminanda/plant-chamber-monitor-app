from django.conf.urls import url
from ChamberApp import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^data$',views.dataApi),
    url(r'^data/([0-9]+)$',views.dataApi),

    url(r'^photo$',views.photoApi),
    url(r'^photo/([0-9]+)$',views.photoApi),
    
    url(r'^photo/savefile',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)