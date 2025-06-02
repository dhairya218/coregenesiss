from rest_framework import viewsets
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactInquiry, SuccessStory
from .serializers import ContactInquirySerializer, SuccessStorySerializer

# Create your views here.

class ContactInquiryViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = ContactInquirySerializer(data=request.data)
        if serializer.is_valid():
            inquiry = serializer.save()
            send_mail(
                subject="New Contact Form Submission",
                message=f"New inquiry from {inquiry.full_name}:\n\n{inquiry.message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=["coregenesisau@gmail.com"],
            )
            return Response({"detail": "Thank you! We'll get back to you soon."}, status=201)
        return Response(serializer.errors, status=400)

class SuccessStoryViewSet(viewsets.ModelViewSet):
    queryset = SuccessStory.objects.all().order_by('-created_at')
    serializer_class = SuccessStorySerializer
