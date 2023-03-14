import React, {FC, MouseEventHandler} from "react";

import styles from "./SettingsTabItem.module.css";
import Link from "next/link";

export interface ISettingsTabItem {
  id: number,
  title: string,
  href: object,
}

export interface ISettingsTabItemProps {
  activeTabItem: number,
  onClick: MouseEventHandler<HTMLAnchorElement>,
  tabProps: ISettingsTabItem
}

const SettingsTabItem:FC <ISettingsTabItemProps> = ({tabProps, onClick, activeTabItem}) => {

     return (
          <Link href={tabProps.href}
               onClick={onClick}
               className={`${styles.tabItem} 
            ${activeTabItem === tabProps.id ? styles.active : ""}`}
          >
               {tabProps.title}
          </Link>
     );
};

export default SettingsTabItem;