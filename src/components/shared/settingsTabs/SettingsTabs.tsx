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
                    <SettingsTabItem tabProps={tab} key={tab.id} activeTabItem={activeTabItem} onClick={() => onClick(tab.id)} />
               ))}
          </nav>
     );
};

export default SettingsTabs;
