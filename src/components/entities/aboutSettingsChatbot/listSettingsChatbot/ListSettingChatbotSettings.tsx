import React, {FC} from "react";
import SettingsChatbotItem from "@/src/components/shared/settingsChatbotItem/SettingsChatbotItem";

import styles from "./styles/ListSettingChatbotSettings.module.css";

export interface SettingsItem {
    id: number;
    icon: React.ReactNode;
    title: string;
}

export interface IListSettingChatbotSettings {
    titleConfig: Array<SettingsItem>;
}

const ListSettingChatbotSettings: FC<IListSettingChatbotSettings> = ({titleConfig}) => {
     return (
          <div className={styles.listItem}>
               {titleConfig.map((item) => (
                    <SettingsChatbotItem
                         id={item.id}
                         icon={item.icon}
                         title={item.title}
                         key={item.id}
                    />
               ))}
          </div>
     );
};

export default ListSettingChatbotSettings;