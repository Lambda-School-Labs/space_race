# Generated by Django 2.0.6 on 2018-06-08 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=234)),
                ('year', models.CharField(max_length=4)),
                ('charge_id', models.CharField(max_length=234)),
            ],
        ),
    ]
