import React, { FC, MouseEventHandler } from "react";

import styles from "./SettingsTabItem.module.css";
import Link from "next/link";

export interface ISettingsTabItem {
     id: number;
     title: string;
     href: string;
}

export interface ISettingsTabItemProps {
     activeTabItem: number;
     tabProps: ISettingsTabItem;
}

const SettingsTabItem: FC<ISettingsTabItemProps> = ({ tabProps, activeTabItem }) => {
     return (
          <Link
               href={tabProps.href}
               className={`${styles.tabItem} 
            ${activeTabItem === tabProps.id ? styles.active : ""}`}
          >
               {tabProps.title}
          </Link>
     );
};

export default SettingsTabItem;
