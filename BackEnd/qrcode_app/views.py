from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from .models import Photo
from .serializers import PhotoSerializer

# Create your views here.
class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        photo = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)