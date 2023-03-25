import React, {FC} from "react";

import styles from "./styles/SettingsChatbotItem.module.css";

export interface ISettingsSelect {
     id: number;
     icon: React.ReactNode;
     title: string;
}

const SettingsChatbotItem: FC<ISettingsSelect> = ({id, icon, title}) => {
     return (
          <div key={id}  className={styles.setting}>
               {icon}
               {title}
          </div>

     );
};

export default SettingsChatbotItem;