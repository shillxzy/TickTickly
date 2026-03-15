from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsersViewSet, TodosViewSet

router = DefaultRouter()
router.register(r'users', UsersViewSet)
router.register(r'todos', TodosViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
