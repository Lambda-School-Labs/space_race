# Generated by Django 2.0.5 on 2018-05-30 23:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Quiz_link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Student_Response',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now=True)),
                ('quiz_link', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='students_responses', to='teams.Quiz_link')),
                ('response', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='teams.Answer')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='teams.Student')),
            ],
        ),
    ]