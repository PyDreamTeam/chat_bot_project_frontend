import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import style from "./platforms.module.css";
import uuid from "uuid-random";

interface PropsChatBotPlatform {
     id: string;
     title: string;
     description: string;
     tags: string[];
     href: string;
     icons: string[]
}

const logoIcons = [
     "/img/logos_facebook.svg",
     "/img/logos_whatsapp-icon.svg",
     "/img/entypo-social_vk-with-circle.svg",
     "/img/fa-brands_viber.svg",
     "/img/logos_telegram.svg",
];

const chatBotPlatforms: PropsChatBotPlatform[] = [
     {
          id: "1",
          title: "Aimilogic",
          description: "Мультиканальная платформа для создания чат-ботов с \"искусственным интеллектом\" и голосовых ботов",
          tags: ["Битрикс24", "Визуальный редактор"],
          href: "",
          icons: logoIcons,
     },
     {
          id: "2",
          title: "Aimilogic",
          description: "Мультиканальная платформа для создания чат-ботов с \"искусственным интеллектом\" и голосовых ботов",
          tags: ["Битрикс24", "Визуальный редактор"],
          href: "",
          icons: logoIcons,
     },
     {
          id: "3",
          title: "Aimilogic",
          description: "Мультиканальная платформа для создания чат-ботов с \"искусственным интеллектом\" и голосовых ботов",
          tags: ["Битрикс24", "Визуальный редактор"],
          href: "",
          icons: logoIcons,
     },
];

const ChatBotPlatform: FC<PropsChatBotPlatform> = ({ id, title, description, tags, href, icons }) => {
     return (
          <div className={style.wrapper}>
               <div className={style.infoBlock}>
                    <Title type="h4" color="black">{title}</Title>
                    <div className={style.description}>
                         <Text type="reg18" color="black" >{description}</Text>
                    </div>
                    <div className={style.tags}>
                         {tags.map((tag) => (
                              <div key={id} className={style.tag}>
                                   <Text type="reg18" color="grey">{tag}</Text>
                              </div>
                         ))}
                    </div>
                    <div className={style.iconBlock}>
                         {icons.map((logo) => (
                              <div key={uuid()}>
                                   <img src={logo} />
                              </div>
                         ))}
                    </div>
               </div>
               <div>
                    {href.length <= 0 ? <div className={style.logoImg}></div> : <div className={style.logoImg}><img src={href} alt="logo" className={style.img} /></div>}
               </div>
          </div>
     );
};

export const Platforms = () => {
     return (
          <div className={style.wrapperComponent}>
               {chatBotPlatforms.map((item) =>
                    <ChatBotPlatform
                         key={item.id}
                         id={item.id}
                         title={item.title}
                         description={item.description}
                         tags={item.tags}
                         href={item.href}
                         icons={item.icons} />
               )}


          </div>
     );
     
};