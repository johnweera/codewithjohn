from django.urls import path

from .views import ProfileViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("profiles", ProfileViewSet, basename="profile")

urlpatterns = router.urls
