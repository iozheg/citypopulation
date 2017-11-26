"""cp_backend URL Configuration"""

from django.conf.urls import url

from citypopulation import views

urlpatterns = [
    url(r'^login/', views.login_user),
    url(r'^logout/', views.logout_user),
    url(r'^register/', views.register),
    url(r'^cities/', views.get_cities)
]
