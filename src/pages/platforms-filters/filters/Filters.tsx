import React from "react";
import { Filter } from "../Filter/Filter";
import style from "./filters.module.css";


const getItemList = (itemsNames: string[]) => itemsNames.map(name => ({ name, checked: false }));
const getFilter = (name: string, itemsNames: string[], info?: string, price?: string) => ({ name, items: getItemList(itemsNames), info, price });

const crmFilter = getFilter("CRM", ["amoCRM", "Битрикс24", "RetailCRM", "1C Битрикс"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const paymentsFilter = getFilter("Платежные системы", ["ЮKassa", "Робокасса", "ЮMoney", "Prodamus"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const serviceFilter = getFilter("Сервисы-интеграторы", ["Albato", "Make", "Apiway", "Zapier"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const apiFilter = getFilter("Работа с API", ["Открытое API", "Webhook"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const voiceHelperFilter = getFilter("Голосовые помощники", ["Алиса", "Маруся", "Aimybox Google Assistant", "Салют"]);
const integration = [crmFilter, paymentsFilter, serviceFilter, apiFilter, voiceHelperFilter];

const emailFilter = getFilter("E-mail", ["Мультиканально", "Омниканально", "Нет"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const smsFilter = getFilter("SMS", ["Мультиканально", "Омниканально", "Нет"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const pushesFilter = getFilter("Пуши", ["Мультиканально", "Омниканально", "Нет"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const messengersFilter = getFilter("Мессенджеры", ["Whatsapp", "Whatsapp Business API", "Telegram", "Viber", "ВКонтакте", "Facebook Messenger", "Instagram"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const channels = [emailFilter, smsFilter, pushesFilter, messengersFilter];

const constructorFilter = getFilter("Конструктор", ["Визуальный редактор", "Линейный редактор", "Готовые шаблоны"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const personalizationFilter = getFilter("Персонализация контента", ["По имени", "По полному имени", "По ID получателя", "По e-mail"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const attachingFilesFilter = getFilter("Прикрепление файлов", ["Изображение", "Видео", "Аудио", "Файл"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const keywordsFilter = getFilter("Ключевые слова", ["Запуск/остановка бота", "Добаление/удаление из авторассылки", "Добавление/удаление метки", "Установить/очистить поле"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const settingsChatBot = [constructorFilter, personalizationFilter, attachingFilesFilter, keywordsFilter];

const providersFilter = getFilter("Провайдеры", ["360Dialog", "EDNA", "Gupshup", "Infabip", "Twilio"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const paymentFilter = getFilter("Оплата", ["Платформе: Безнал", "Платформе: Российской картой", "Провайдеру: Иностранной картой", "Провайдеру: Безнал иностранное ЮЛ"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const whatsappBusinessAPI = [providersFilter, paymentFilter];

const workWithSubscribersFilter = getFilter("Работа с подписчиками", ["Загрузка базы по ID", "Выгрузка базы без ID мессенджеров", "Выгрузка базы с ID Телеграма", "Выгрузка базы с ID ВКонтакте", "Чат-панель"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const massMailingsFilter = getFilter("Массовые рассылки", ["Тектовые сообщения", "Изображения", "Файлы", "Кнопки-действия"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const massMailingChannelsFilter = getFilter("Каналы массовых рассылок", ["Номерной ВК", "Номерной Viber", "Whatsapp неофициальный", "Whatsapp Business API"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const subscribers = [workWithSubscribersFilter, massMailingsFilter, massMailingChannelsFilter];

const waysFilter = getFilter("Способы", ["Минилендинги", "ВК-лендинги", "Приложение ВКонтакте", "QR-код"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const websiteWidgetFilter = getFilter("Виджет для сайта", ["Попап", "Встроенный", "Онлайн-чат"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const subscriptions = [waysFilter, websiteWidgetFilter];

const statisticsFilter = getFilter("", ["Есть", "Нету"]);
const statistics = [statisticsFilter];

const tariffFilter = getFilter("", ["Есть бесплатный", "Есть триальный", "Нет бесплатной версии"]);
const trialPeriodFilter = getFilter("Триальный период", ["До 3 дней", "До 5 дней", "До 7 дней", "До 10 дней", "До 14 дней"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const paymentFeaturesFilter = getFilter("Особенности оплаты", ["Безналичный расчет", "Иностранный расчет", "Российской картой"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati atque soluta quisquam mollitia dicta, officiis velit, pariatur nulla quae laudantium enim nesciunt. Corrupti rem dolore, eum vel quas quae?");
const priceFilter = getFilter("Стоимость", [], undefined, "");
const tariff = [tariffFilter, trialPeriodFilter, paymentFeaturesFilter, priceFilter];

const documentsFilter = getFilter("", ["Предоставляются", "Не предоставляются"]);
const documents = [documentsFilter];

const supportFilter = getFilter("", ["24/7", "Только в рабочее время"]);
const support = [supportFilter];

const levelOfDifficultyFilter = getFilter("", ["Для новичка", "Для опытного пользователя", "Для профессионала"]);
const levelOfDifficulty = [levelOfDifficultyFilter];

export const Filters = () => {
     return (
          <div className={style.wrapper}>
               <div>
                    <Filter name="Интеграции" items={integration} />
                    <Filter name="Каналы" items={channels} />
                    <Filter name="Настройка чат-ботов" items={settingsChatBot} />
                    <Filter name="Whatsapp business API" items={whatsappBusinessAPI} />
                    <Filter name="Подписчики" items={subscribers} />
                    <Filter name="Подписки" items={subscriptions} />
                    <Filter name="Статистика" items={statistics} />
                    <Filter name="Тарифы" items={tariff} />
                    <Filter name="Документы" items={documents} />
                    <Filter name="Служба поддержки" items={support} />
                    <Filter name="Уровень сложности" items={levelOfDifficulty} />
               </div>
          </div>


     );
};