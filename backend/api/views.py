from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Student, Faculty, Subject
from .serializers import StudentSerializer, FacultySerializer, SubjectSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class FacultyViewSet(viewsets.ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

