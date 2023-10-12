export const CONFIG_BLOCK_STEPS = [
    {
        id: 0,
        title: "1. Создание минилендинга о форме обучения",
        content: "Информация, полученная от клиента сегментируется и используется в дальнейшем при общении с клиентом.",
    },
    {
        id: 1,
        title: "2. Знакомство с пользователем и запрос имени",
        content:
            "Знакомство с пользователем и запрос имени происходит в чат-боте. Все данные,\n" +
            "полученные от пользователя сохраняются и\n" +
            "используются в дальнейшем.",
    },
    {
        id: 2,
        title: "3. Тестирование пользователя, определение типа обучения",
        content:
            "Предлагаем пользователю пройти тестирование для подбора программы обучения.\n" +
            "Это квиз с подсчетом баллов. В зависимости от набранных баллов распределяем\n" +
            "пользователей по уровням знаний: новичок, опытный. В дальнейшем опираемся на эту\n" +
            "информацию для построения уроков на минилендингах: например, дополнительный\n" +
            "материал для каждого уровня предлагаем свой.",
    },
    {
        id: 3,
        title: "4. Запись на бесплатную консультацию",
        content:
            "После того, как определили уровень знаний, студенту предлагается записаться на бесплатную\n" +
            "консультацию на свободные дату/время. Для этого используем интеграцию с гугл-таблицами.\n" +
            "Таблицу ведет менеджер онлайн-школы, отмечает в ней недоступные для записи дни:\n" +
            "выходные, праздничные и т.д. и бот исключает их, показывает только свободные дни. \n" +
            "Аналогично настроен выбор свободного времени: заполненные в таблице слоты по\n" +
            "времени исключаются из показа.\n" +
            "После выбора даты и времени запись необходимо подтвердить. Кроме того, есть\n" +
            "возможность изменить дату и время. \n" +
            "Менеджер со своей стороны видит имя, телефон, направление обучения и уровень\n" +
            "знаний абитуриента, определенный тестом. А также дату и время записи на бесплатную\n" +
            "консультацию.\n" +
            "После консультации менеджер представляет абитуриенту ссылку на бесплатный\n" +
            "пробный урок.\n" +
            "Абитуриенту отправляем напоминания о консультации за сутки и за 1 час до начала.",
    },
    {
        id: 4,
        title: "5. Уведомление в Telegram на бесплатную консультацию",
        content:
            "Менеджер дополнительно к новой записи в гугл-таблице получает уведомление в\n" +
            "Telegram о новой записи на консультацию с указанием даты и времени.\n" +
            "На этом вовлекающая часть школы закончена.\n" +
            "Таким образом, чат-бот выявил потребность, оценил уровень абитуриента, выдал лид-магнит в виде бесплатного пробного урока.",
    },
    {
        id: 5,
        title: "6. Подлючение платежных сервисов",
        content:
            "На следующий день после пробного урока чат-бот отправляет пользователю сообщение с предложением купить платный курс и оплатить прямо в боте.\n" +
            "Популярным платежным сервисом для онлайн-школ является Prodamus.\n" +
            "Кроме того, на выбор доступны более 20 платежных сервисов, которые можно\n" +
            "подключить к чат-боту.\n" +
            "Некоторые сервисы предоставляют возможность оплаты в рассрочку.\n" +
            "Важно отметить, что онлайн-школа может продавать одновременно разные курсы по\n" +
            "разной стоимости, поэтому чат-бот проверяет, за какой именно курс была оплата, и открывает\n" +
            "доступ именно к нему.\n" +
            "Данные о пользователе и об оплаченном курсе приходят в чат-бот из платежной\n" +
            "системы в виде колл-бэка.",
    },
    {
        id: 6,
        title: "7. Создание уроков для онлайн-школы и личной страницы",
        content:
            "После оплаты студенту высылается первый урок с заданием. Урок размещается на\n" +
            "минилендинге.\n" +
            "К студенту обращаются по имени, введенном при попадании в бот, возможно добавить\n" +
            "индивидуальный текст в урок в зависимости от уровня знаний студента, оставить ссылки на\n" +
            "дополнительные материалы.",
    },
    {
        id: 7,
        title: "8. Создание записи и успеваемости в журнал ",
        content:
            "Для перехода к следующему уроку студент должен отправить домашнее задание на\n" +
            "проверку куратору. Факт сдачи домашнего задания – нажал на кнопку «Отправить» -\n" +
            "открывает для студента доступ к следующему уроку.\n" +
            "Одновременно чат-бот отправляет домашнее задание куратору и дает возможность\n" +
            "принять задание и поставить оценку или отклонить его и отправить комментарий, который\n" +
            "получит студент.\n" +
            "\n" +
            "Студент получает сообщение с оценкой.",
    },
    {
        id: 8,
        title: "9. Отправка домашних заданий, общение внутри бота",
        content:
            "Чат-бот вносит эту оценку в журнал успеваемости.\n" +
            "В качестве домашнего задания бот может предлагать тест с подсчетом баллов за\n" +
            "правильные ответы.\n" +
            "Аналогично настраивается взаимодействие по следующим урокам: студент изучает\n" +
            "урок, выполняет домашнее задание, которое отправляется на проверку куратору. Куратор\n" +
            "выставляет оценку, она автоматически вносится в журнал успеваемости, а студенту приходит\n" +
            "сообщение с оценкой. Данные ученика дополняются новыми оценками в журнале\n" +
            "успеваемости.",
    },
    {
        id: 9,
        title: "10. Проведение экзаменационного звонка в Zoom",
        content:
            "После того, как пройдены все уроки, студент приглашается на экзаменационный\n" +
            "созвон. Он выбирает удобные дату и время. Запись на экзамен можно изменить, удалить или подтвердить.\n" +
            "После подтверждения запись на экзамен вносится в гугл-таблицу. Она единая, для\n" +
            "бесплатной консультации и экзамена созданы отдельные листы.\n" +
            "Куратор видит запись на экзамен вместе со ссылкой на Zoom в гугл-таблице на\n" +
            "странице записи на экзамен.\n" +
            "Студент получает эту ссылку в сообщении от бота. За сутки и за час до экзамена чат-бот присылает напоминание об экзамене.",
    },
    {
        id: 10,
        title: "11. Выдача сертификата после сдачи экзамена",
        content:
            "После сдачи экзамена куратор отправляет кодовое слово боту, вводит ID пользователя и выставляет оценку.\n" +
            "Оценка записывается в гугл-таблицу “Журнал успеваемости” в графу “Экзамен”.\n" +
            "\n" +
            "Студенту чат-бот предлагает ввести свою фамилию для получения именного диплома.",
    },
];
