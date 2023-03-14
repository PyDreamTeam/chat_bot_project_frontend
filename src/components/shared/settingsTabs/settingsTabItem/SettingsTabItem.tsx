import React, {FC, MouseEventHandler} from "react";

import styles from "./SettingsTabItem.module.css";
import Link from "next/link";

export interface ISettingsTabItem {
  id: number
  title: string
  href: object
}

export interface ISettingsTabItemProps extends ISettingsTabItem {
  activeTabItem: number,
  onClick: (id: number) => void
}

const SettingsTabItem:FC <ISettingsTabItemProps> = ({id, title, onClick, activeTabItem, href}) => {

     const handleTabItemClick = () => onClick(id);

     return (
          <Link href={href}
               onClick={handleTabItemClick}
               className={`${styles.tabItem} 
            ${activeTabItem === id ? styles.active : ""}`}
          >
               {title}
          </Link>
     );
};

export default SettingsTabItem;