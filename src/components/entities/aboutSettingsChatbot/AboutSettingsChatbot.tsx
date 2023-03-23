import React from "react";
import TextField from "@/src/components/shared/text/TextField";
import ListSettingChatbotSettings
     from "@/src/components/entities/aboutSettingsChatbot/listSettingsChatbot/ListSettingChatbotSettings";
import {ABOUT_SETTINGS_CHATBOT} from "@/src/components/entities/aboutSettingsChatbot/AboutSettingsConfig";
import Image from "next/image";
import imageDev from "./pictures/Group.svg";

import styles from "./styles/AboutSettingsChatbot.module.css";

const AboutSettingsChatbot = () => {    
     return (
          <div className={styles.wrapper}>
               <div className={styles.blockImg}>
                    <Image src={imageDev} alt="Developers"/>
               </div>
               <div className={styles.blockAbout}>
                    <div className={styles.title}>
                         <TextField type={"h3"} color={"black"}>
                       Функционал для настроек чат-ботов
                         </TextField> 
                    </div>
                    <ListSettingChatbotSettings titleConfig={ABOUT_SETTINGS_CHATBOT}/>
               </div>
          </div>
     );
};

export default AboutSettingsChatbot;