# Generated by Django 3.2.7 on 2021-09-25 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_basicuser_user_group'),
    ]

    operations = [
        migrations.AlterField(
            model_name='region',
            name='orphanages',
            field=models.ManyToManyField(blank=True, to='main.Orphanage'),
        ),
    ]