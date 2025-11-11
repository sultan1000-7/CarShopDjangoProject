# Базовый образ
FROM python:3.13

# Рабочая директория
WORKDIR /app

# Устанавливаем зависимости
COPY req.txt .
RUN pip install --no-cache-dir -r req.txt

# Копируем весь проект
COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
