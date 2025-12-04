from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework import viewsets


@api_view(["GET"])
def hello_api(request):
    return Response({"message": "Hello John"})


@api_view(["GET"])
def goodbye_api(request):
    return Response(
        {
            "status": "ok",
            "message": "Goodbye John",
            "learning": "Django REST Framework is awesome!",
        }
    )


@api_view(["GET"])
def list_profiles(request):
    profiles = Profile.objects.all()
    serializer = ProfileSerializer(profiles, many=True)
    return Response(serializer.data)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
