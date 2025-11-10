from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_GET

import random

from .models import Car


@require_GET
@csrf_protect
def main(request):

    cars = list(Car.objects.all())

    random_cars = random.sample(cars, min(len(cars), 3))
    return render(request, 'cars/main_page.html', {'cars': random_cars})

@require_GET
@csrf_protect
def catalog(request):
    cars = Car.objects.all()
    return render(request, 'cars/catalog.html', {'cars': cars})
