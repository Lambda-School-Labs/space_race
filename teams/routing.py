from django.conf.urls import url
from django.urls import include, path
from . import consumers

websocket_urlpatterns = [
    path(r'^ws/quiz/(?P<slug>[^/]+)/$', consumers.QuizConsumer),
]