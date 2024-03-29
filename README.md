# plant-chamber-monitor-app

Tools used: React.js, Django, SQLite

Course References: [React JS + Python Django + SQLite | Fullstack App Tutorial](https://www.youtube.com/watch?v=WsBYK5Nv2V8&t=2620s)

Result: [stormy-stream-35141.herokuapp.com](https://stormy-stream-35141.herokuapp.com/)

API Base URL: [plantchambermonitorapi.herokuapp.com](https://plantchambermonitorapi.herokuapp.com/)

About the project: [Final Presentation of Mobile Computing and Web Technology Course](https://docs.google.com/presentation/d/1AwnkB7VFRMF_U3N514gIqtQ_gwpDk5Z1/edit?usp=sharing&ouid=108280050431583243416&rtpof=true&sd=true)

Steps to run Django project in local:

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
pip install -r requirements.txt
pip manage.py migrate
pip manage.py runserver
```
