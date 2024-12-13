from rest_framework import serializers
from .models import User, Student, Faculty, Subject

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Faculty
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    faculty = FacultySerializer()
    students = StudentSerializer(many=True)

    class Meta:
        model = Subject
        fields = '__all__'
