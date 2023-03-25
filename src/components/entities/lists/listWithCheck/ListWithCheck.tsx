import React, {FC} from "react";
import TabCheck from "@/src/components/shared/tabs/tabCheck/TabCheck";

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
                    <TabCheck
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