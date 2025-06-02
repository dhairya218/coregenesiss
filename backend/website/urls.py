from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactInquiryViewSet, SuccessStoryViewSet

app_name = 'website'

router = DefaultRouter()
router.register(r'contact', ContactInquiryViewSet, basename='contact')
router.register(r'stories', SuccessStoryViewSet, basename='stories')

urlpatterns = [
    path('', include(router.urls)),
] 