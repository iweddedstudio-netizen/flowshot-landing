# Настройка Google Sheets для Waitlist

## Шаг 1: Создайте Google Таблицу

1. Перейдите на [Google Sheets](https://sheets.google.com)
2. Создайте новую таблицу с названием "FlowShot Waitlist"
3. В первой строке создайте заголовки:
   - A1: `Timestamp`
   - B1: `Type`
   - C1: `Name`
   - D1: `Email`
   - E1: `Question`

## Шаг 2: Создайте Google Apps Script

1. В вашей таблице нажмите `Расширения` → `Apps Script`
2. Удалите весь код по умолчанию
3. Вставьте следующий код:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Получаем данные из формы
    var timestamp = new Date();
    var formType = e.parameter.formType || 'waitlist';
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var question = e.parameter.question || '';
    var recipient = e.parameter.recipient || 'iweddedstudio@gmail.com';
    var subject = e.parameter.subject || 'FlowShot support question';

    // Добавляем новую строку с данными.
    sheet.appendRow([timestamp, formType, name, email, question]);

    // Для встроенной формы поддержки отправляем письмо владельцу.
    if (formType === 'support') {
      MailApp.sendEmail({
        to: recipient,
        replyTo: email,
        subject: subject,
        body:
          'New FlowShot support question\n\n' +
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n\n' +
          'Question:\n' + question
      });
    }

    // Возвращаем успешный ответ
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'row': sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return doPost(e);
}
```

4. Нажмите `Сохранить` (иконка дискеты)
5. Дайте проекту имя, например "FlowShot Waitlist Handler"

## Шаг 3: Разверните как Web App

1. Нажмите `Развернуть` → `Новое развертывание`
2. В разделе "Тип" выберите `Веб-приложение`
3. Настройте параметры:
   - **Описание**: FlowShot Waitlist Form Handler
   - **Запуск от имени**: Меня (ваш email)
   - **У кого есть доступ**: Все пользователи
4. Нажмите `Развернуть`
5. Авторизуйте приложение (нажмите "Авторизовать доступ")
6. **ВАЖНО**: Скопируйте URL веб-приложения (он выглядит как `https://script.google.com/macros/s/AKfycby.../exec`)

## Шаг 4: Добавьте URL в `.env.local`

1. Откройте файл `.env.local`
2. Добавьте или обновите строку:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Замените значение на URL, который вы скопировали на предыдущем шаге

## Шаг 5: Проверьте работу

1. Перезапустите dev сервер
2. Откройте сайт и нажмите "Try FlowShot free", чтобы проверить waitlist
3. Нажмите кнопку "Support" в правом нижнем углу, чтобы проверить форму поддержки
4. Проверьте Google Таблицу - новая строка должна появиться
5. Для формы поддержки проверьте почту `iweddedstudio@gmail.com`

## Готово! 🎉

Теперь все заявки с вашего лендинга будут автоматически сохраняться в Google Таблицу.

### Дополнительно

Вы можете настроить email уведомления в Google Sheets:
1. В Google Таблице нажмите `Инструменты` → `Правила уведомлений`
2. Выберите "Пользователь отправляет форму" или "При любых изменениях"
3. Настройте частоту уведомлений
