import Image from "next/image";
import iconCheck from "@/src/components/entities/aboutSettingsChatbot/pictures/Tick for blocks.png";

export const ABOUT_SETTINGS_CHATBOT = [
     {      
          id: 1,
          icon: (
               <Image src={iconCheck} alt="Check"/>
          ),
          title: "Конструктор: визуальный редактор"
     },
     {
          id: 2,
          icon: (
               <Image src={iconCheck} alt="Check"/>
          ),
          title: "Персонализация контента: по имени, по полному имени, по полу"
     },
     {
          id: 3,
          icon: (
               <Image src={iconCheck} alt="Check"/>
          ),
          title: "Прикрепление файлов: фото, аудио, видео"
     },
     {
          id: 4,
          icon: (
               <Image src={iconCheck} alt="Check"/>
          ),
          title: "Ключевые слова: автоответы"
     },
];