# Generated by Django 3.1 on 2021-04-24 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0004_freelancer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proyecto',
            name='titulo',
            field=models.CharField(max_length=35),
        ),
    ]
