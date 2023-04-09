# plant-chamber-monitor-app

Tools used: React.js, Django, SQLite

Result: [stormy-stream-35141.herokuapp.com](https://stormy-stream-35141.herokuapp.com/)

API Endpoint: [plantchambermonitorapi.herokuapp.com](https://plantchambermonitorapi.herokuapp.com/)

About the project: [Final Presentation of Mobile Computing and Web Technology Course](https://drive.google.com/file/d/1O8L9o7n5jqN_o2wuiafR2FtgOFFNM9FT/view?usp=sharing)

Steps to run in local:

- change the use of this library 
```
from django.conf.urls import url 
```
to 
```
from django.urls import repath (if any)
```
- create requirements.txt and copy this text to that file:
```
asgiref==3.6.0
Django==4.2
django-cors-headers==3.14.0
djangorestframework==3.14.0
gunicorn==20.1.0
pytz==2023.3
sqlparse==0.4.3
```
- Run these commands:
```
php install -r requirements.txt
php manage.py migrate
php manage.py runserver
```
