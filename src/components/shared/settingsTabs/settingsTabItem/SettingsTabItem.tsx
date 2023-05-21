import React, { FC, MouseEventHandler } from "react";

import styles from "./styles/SettingsTabItem.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";

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
               <Text type={"med20"} color={"black"}>
                    {tabProps.title}
               </Text>
          </Link>
     );
};

export default SettingsTabItem;