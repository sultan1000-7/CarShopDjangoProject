from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_GET


@require_GET
@csrf_protect
def main(request):
    return render(request, 'main_page.html')
