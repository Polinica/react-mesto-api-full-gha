[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`. 
  
Пожалуйста, прикрепите в это описание ссылку на сайт, размещенный на Яндекс.Облаке.

Адрес репозитория: https://github.com/Polinica/react-mesto-api-full-gha.git

## Ссылки на проект

IP 158.160.70.71

Frontend https://newetpika.nomoreparties.co/

Backend https://api.newetpika.nomoreparties.co/sign-up

## Это продолжение работы над проектом Mesto:
1. [Mesto](https://github.com/Polinica/mesto)
2. [Mesto (версия на React)](https://github.com/Polinica/mesto-react)
3. [Mesto (версия на авторизацией и регистрацией)](https://github.com/Polinica/react-mesto-auth)
4. [Mesto (версия для сервера)](https://github.com/Polinica/express-mesto-gha)
5. Mesto (версия с фронтендом и бэкендом) ⬅ _этот репозиторий_

Выполнен в рамках серии проектных работ в Яндекс.Практикуме по профессии «Веб-разработчик» (от начала изучения бекэнда, спринт 13, и далее).

### _**Проектная работа №15. Курс «Веб-разработчик» Яндекс.Практикум.**_

#### Сдача проекта Mesto (версия с фронтендом и бэкендом).

#### 1. Реализуйте логирование запросов и ошибок

#### 2. Объедините фронтенд и бэкенд части приложения.

#### 3. Создайте облачный сервер и разверните API

#### 4. Проверьте, что вся функциональность сохранена

#### 5. Создание .env-файла

#### 6. Создайте домен и прикрепите его к серверу

#### 7. Выпустите сертификаты и подключите их

#### 8. Краш-тест сервера

---

**📄 Чеклисты:**

- [Чеклист 15-го спринта](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_15.pdf)

**🌐 Проект на GitHub Pages:**

- [gh-pages](https://polinica.github.io/mesto/)

## Структура проекта

`backend/` - бэкенд для сервера с API

`frontend/` - фронтенд на React.js

## Дополнительные возможности этой версии

- Фронтенд
  - React-приложение адаптировано под сервера Я.Практикума
  - вся функциональность приложения сохранена
- Бэкенд
  - фронтенд и бэкенд на одном сервере с доступом через домен
  - сбор логов запросов к серверу в файл `request.log`
  - сбор логов ошибок на сервере в файл `error.log`
  - доступ к серверу через ssh
  - автоматический запуск/перезапуск БД на сервере
  - автоматический запуск/перезапуск сервера
  - настроенный файрвол для работы с портами
  - обработка CORS-запросов на сервере
  - доступ через `https`

## Стек технологий

- сервер на `Ubuntu` в Яндекс.Облаке
- ssh-ключи для доступа к серверу
- API-сервер на `Node.js` + `express.js`
- база данных на `MongoDB` + `Mongoose`
- обновление кода на сервере через `Git`
- менеджер процессов на сервере `pm2`
- раздача фронтенда через `nginx`
- обратный прокси-сервер на `nginx`
- файрвол `ufw`
- хранение переменных окружения в `.env`-файле

## Статус разработки

✅ _Завершено_

---

👤 **Автор**

**_Виктория Люсикова_**
