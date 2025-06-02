from rest_framework import serializers
from .models import ContactInquiry, SuccessStory

class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ['id', 'full_name', 'email', 'phone', 'service', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']

class SuccessStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStory
        fields = ['id', 'title', 'description', 'client_name', 'service_type', 'image', 'created_at']
        read_only_fields = ['id', 'created_at'] 