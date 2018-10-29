from django.urls import include, path
from rest_framework.authtoken import views as drf_views
urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('accounts/', include('accounts.urls')),
    path('paypay/', include('paypay.urls')),
    path('teams', include('teams.urls')),
    # path('rest-auth/', drf_views.obtain_auth_token( name='auth'))
]
