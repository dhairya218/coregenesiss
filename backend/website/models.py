from django.db import models

SERVICE_CHOICES = [
    ('web_development', 'Web Development'),
    ('mobile_app', 'Mobile App Development'),
    ('ui_ux', 'UI/UX Design'),
    ('consulting', 'IT Consulting'),
    ('other', 'Other'),
]

# Create your models here.
class ContactInquiry(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.service}"

class SuccessStory(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    client_name = models.CharField(max_length=100)
    service_type = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    image = models.ImageField(upload_to='success_stories/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
