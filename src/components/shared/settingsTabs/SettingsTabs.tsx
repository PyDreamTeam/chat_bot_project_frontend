import React, {FC} from "react";
import SettingsTabItem, {ISettingsTabItem} from "./settingsTabItem/SettingsTabItem";
import styles from "./SettingsTabs.module.css";

interface ISettingsTabs {
     config: ISettingsTabItem[]
     activeTabItem: number
}

const SettingsTabs:FC <ISettingsTabs> = ({config, activeTabItem }) => {
     return (
          <nav className={styles.tabs}>
               {config.map(tab => (
                    <SettingsTabItem tabProps={tab} key={tab.id} activeTabItem={activeTabItem} />
               ))}
          </nav>
     );
};

export default SettingsTabs;
