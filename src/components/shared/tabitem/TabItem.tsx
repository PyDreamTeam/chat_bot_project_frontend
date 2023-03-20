import React, { FC, MouseEventHandler } from "react";
import styles from "././styles/TabItem.module.css";
import Link from "next/link";

export interface ITabItem {
     id: number;
     title: string;
     icon: React.ReactNode;
     href: string;
}

export interface TabItemProps {
     activeTabItem: number | null;
     onClick: any;
}

const TabItem: FC<ITabItem & TabItemProps> = ({ id, title = "", onClick, icon, activeTabItem, href }) => {
     return (
          <Link href={href} onClick={onClick} className={`${styles.tabItem} ${activeTabItem === id ? styles.active : null}`}>
               {icon}
               {title}
          </Link>
     );
};

export default TabItem;
