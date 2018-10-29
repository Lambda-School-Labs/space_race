from django.conf.urls import url
from django.urls import include, re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'^ws/quiz/(?P<slug>[^/]+)/$', consumers.QuizConsumer),
]