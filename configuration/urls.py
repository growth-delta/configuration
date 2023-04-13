"""
URL configuration for configuration project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from applications.website.SiteMap import SiteMap
sitemaps = {'site': SiteMap()}

urlpatterns = [
    # Other Urls
    path('admin/', admin.site.urls), # Admin Panel
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'), # Site Map
    # Website Page Urls
    path('', include('applications.website.urls')), # Landing Page
    path('content/', include('applications.content.urls')), # CMS
    # Application Page Urls
        # Restful API
    path('api-auth/', include('rest_framework.urls')), # API | https://www.django-rest-framework.org/#installation
    path('data/api/', include('applications.api.urls')), # API | Restful API
]
