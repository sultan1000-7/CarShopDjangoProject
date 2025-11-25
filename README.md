Запуск проекта на Python (Windows)
1. Проверка Python

Откройте терминал (CMD или PowerShell) и выполните:

```powershell
python --version
```

Если вы увидите версию Python 3.10 или выше — переходите к шагу 3.
Если Python не установлен, читайте шаг 2.

2. Установка Python через winget

Сначала убедитесь, что установлен winget. В терминале выполните:

```powershell
winget --version
```

Если команда показывает номер версии — winget есть.

Если нет — установите python 3.13 вручную https://www.python.org/downloads/ (.

Установите Python командой:

```powershell
winget install Python.Python.3
```

Проверьте установку:

```powershell
python --version
```

3. Создание виртуального окружения .venv

В терминале выполните команду в корне проекта:
```powershell
python -m venv .venv
```

Активация виртуального окружения:
```powershell
.venv\Scripts\Activate.ps1
```

4. Установка зависимостей проекта

В корне проекта должен быть файл req.txt. В терминале выполните:

```powershell
pip install -r req.txt
```

Если Python используется как python3, тогда:

```powershell
python3 -m pip install -r requirements.txt
```

5. Запуск проекта

В терминале выполните:

```powershell
python manage.py runserver
```

6. Создание файла .env

В терминале выполните:

```powershell
@"
DB_NAME=carshop_db
DB_USER=carshop_user
DB_PASS=carshop123
DB_HOST=192.168.0.109
DB_PORT=5432
"@ | Out-File -Encoding UTF8 .env
```

Если выходит ошибка, нужно взять новый ip
```powershell
django.db.utils.OperationalError: **connection to server at "192.168.0.101"**, port 5432 failed: Connection refused (0x0000274D/10061)
        Is the server running on that host and accepting TCP/IP connections?
```