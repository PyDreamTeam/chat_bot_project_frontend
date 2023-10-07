import { AccountPageTypes } from "@/src/shared/enums/my-account";
import React, { FC } from "react";
import SettingsTabItem, { ISettingsTabItem } from "./settingsTabItem/SettingsTabItem";
import styles from "./styles/SettingsTabs.module.css";

interface ISettingsTabs {
    config: ISettingsTabItem[];
    activeTabItem: number;
    page?: keyof typeof AccountPageTypes;
}

const SettingsTabs: FC<ISettingsTabs> = ({ config, activeTabItem, page }) => {
    return (
        <nav className={page ? `${styles.tabs} ${styles[page]}` : styles.tabs}>
            {config.map((tab) => (
                <SettingsTabItem tabProps={tab} key={tab.id} activeTabItem={activeTabItem} page={page} />
            ))}
        </nav>
    );
};

export default SettingsTabs;
