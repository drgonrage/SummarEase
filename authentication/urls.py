from django.contrib import admin  # Django admin module
from django.urls import path, include       # URL routing
from django.conf import settings   # Application settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns  # Static files serving
from django.conf.urls.static import static
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView
from .views import CustomTokenObtainPairView


# Define URL patterns
urlpatterns = [
    path("api/user/create/", createUser.as_view(), name="register"),
    path("api/user/token/", CustomTokenObtainPairView.as_view(), name="get_token"),
    path("api/user/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api/user/user-info", getUserInfo.as_view(), name="user-info"),
    path("api/api-auth/", include("rest_framework.urls")),
]
 
# Serve media files if DEBUG is True (development mode)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
 
# Serve static files using staticfiles_urlpatterns
urlpatterns += staticfiles_urlpatterns()