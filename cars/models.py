from django.db import models

class Car(models.Model):
    BRAND_CHOICES = [
        ('toyota', 'Toyota'),
        ('bmw', 'BMW'),
        ('audi', 'Audi'),
        ('mercedes', 'Mercedes-Benz'),
        ('kia', 'Kia'),
        ('hyundai', 'Hyundai'),
        ('nissan', 'Nissan'),
        ('honda', 'Honda'),
        ('tesla', 'Tesla'),
        ('ford', 'Ford'),
    ]

    brand = models.CharField("Марка", max_length=50, choices=BRAND_CHOICES)
    model = models.CharField("Модель", max_length=100)
    year = models.PositiveIntegerField("Год выпуска")
    price = models.DecimalField("Цена", max_digits=10, decimal_places=2)
    mileage = models.PositiveIntegerField("Пробег (км)", null=True, blank=True)
    color = models.CharField("Цвет", max_length=30, null=True, blank=True)
    description = models.TextField("Описание", blank=True)
    image = models.ImageField("Фото", upload_to='cars/', null=True, blank=True)
    created_at = models.DateTimeField("Добавлено", auto_now_add=True)
    updated_at = models.DateTimeField("Обновлено", auto_now=True)

    class Meta:
        verbose_name = "Машина"
        verbose_name_plural = "Каталог машин"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.brand.capitalize()} {self.model} ({self.year})"