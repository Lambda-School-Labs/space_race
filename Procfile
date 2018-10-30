
release: python manage.py migrate
redis: redis-server
web: python manage.py runserver
web: gunicorn backend.wsgi --log-file -
frontend: (cd src; npm start)
