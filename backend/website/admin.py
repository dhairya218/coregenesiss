from django.contrib import admin
from .models import ContactInquiry, SuccessStory

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'service', 'created_at')
    list_filter = ('service', 'created_at')
    search_fields = ('full_name', 'email', 'phone', 'message')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',)

@admin.register(SuccessStory)
class SuccessStoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'client_name', 'service_type', 'created_at')
    list_filter = ('service_type', 'created_at')
    search_fields = ('title', 'client_name', 'description')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',) 