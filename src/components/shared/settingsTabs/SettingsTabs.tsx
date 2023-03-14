import React, {FC} from "react";
import SettingsTabItem, {ISettingsTabItem} from "./settingsTabItem/SettingsTabItem";
import styles from "./SettingsTabs.module.css";

interface ISettingsTabs {
     config: ISettingsTabItem[]
     activeTabItem: number
     onClick: any
}

const SettingsTabs:FC <ISettingsTabs> = ({config, activeTabItem=1, onClick }) => {
     return (
          <nav className={styles.tabs}>
               {config.map(tab => (
                    <SettingsTabItem href={tab.href} key={tab.id} id={tab.id} title={tab.title} activeTabItem={activeTabItem} onClick={onClick} />
               ))}
          </nav>
     );
};

export default SettingsTabs;
