import Text from "@/src/components/shared/text/Text";
import React from "react";
import Image from "next/image";

export const CARDS_FEEDBACK = [
    {
        id: 1,
        img: <Image src={"img/feedback_1.png"} alt="feedback-image" width={64} height={64} />,
        name: (
            <Text type={"reg20"} color={"black"}>
                Сергей Жураков
            </Text>
        ),
        jobTitle: (
            <Text type={"reg14"} color={"telegray"}>
                Продакт-менеджер
            </Text>
        ),
        text: " «Мы выбрали конструктор Aimylogic за его интуитивно-понятный интерфейс, возможность подключения чат-бота в различных каналах и хороший пул настроек, которые позволяют создать бота под персональные запросы, сделать его уникальным для своей компании – это оказалось очень важным критерием при создании Ноны. Мы выбрали конструктор Aimylogic за его интуитивно-понятный интерфейс, возможность подключения чат-бота в различных каналах и хороший пул настроек, которые позволяют создать бота под персональные запросы, сделать его уникальным для своей компании – это оказалось очень важным критерием при создании Ноны.»",
    },
    {
        id: 2,
        img: <Image src={"img/feedback_2.png"} alt="feedback-image" width={64} height={64} />,
        name: (
            <Text type={"reg20"} color={"black"}>
                Петр Емельянов
            </Text>
        ),
        jobTitle: (
            <Text type={"reg14"} color={"telegray"}>
                Co-founder & CEO
            </Text>
        ),
        text: "«Aimylogic — это инструмент, который отлично помогает решать задачи в ритейле. Он эффективен, прост в обращении, он помогает бизнесу удерживать клиента и превращает в покупателя.»",
    },
    {
        id: 3,
        img: <Image src={"img/feedback_3.png"} alt="feedback-image" width={64} height={64} />,
        name: (
            <Text type={"reg20"} color={"black"}>
                Мария Шишкина
            </Text>
        ),
        jobTitle: (
            <Text type={"reg14"} color={"telegray"}>
                PR менеджер
            </Text>
        ),
        text: "«Мы видим огромный потенциал в развитии речевого искусственного интеллекта — там, где оператору контакт-центра требовалось 2-3 минуты для получения информации о клиенте, его заказах, возможных рекомендаций по услугам или товарам, цифровой консультант справляется за секунды и при этом более точно. Компания планирует и дальше расширять функционал чат-бота, развивать его зону ответственности, например, в создании обращений, и учить его лучше понимать клиентов. Специалисты контакт-центра при этом смогут сосредоточиться на решении более сложных вопросов.»",
    },
    {
        id: 4,
        img: <Image src={"img/feedback_4.png"} alt="feedback-image" width={64} height={64} />,
        name: (
            <Text type={"reg20"} color={"black"}>
                Федор Евсеев
            </Text>
        ),
        jobTitle: (
            <Text type={"reg14"} color={"telegray"}>
                Business Development
            </Text>
        ),
        text: "«Проанализировав работу колл-центра, я пришел в ужас и начал действовать. Сразу в голову пришло возможное решение с чат-ботом, который в автоматическом режиме отвечает на вопросы, решает простые  проблемы пользователей без вмешательства живого человека, например, по регистрации, оплате, отмене подписки и пр. Мы хотели упорядочить общение с пользователями: иметь возможность просматривать историю сообщений в одном месте и подключаться к любому диалогу моментально. И самое важное — это подробная аналитика по обращениям пользователей.»",
    },
];
