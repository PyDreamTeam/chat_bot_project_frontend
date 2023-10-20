import React, { FC, MouseEventHandler } from "react";
import styles from "././styles/TabItem.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";


export interface ITabItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    href: string;
}

export interface TabItemProps {
    activeTabItem: number | null;
}




const TabItem: FC<ITabItem & TabItemProps> = ({ id, title = "", icon, activeTabItem, href }) => {

    return (
        <Link href={href} className={`${styles.tabItem} 
        ${activeTabItem === id ? styles.active : null} 
        `}>
            {icon}
            <Text type={"med20"} color={"black"}>
                {title}
            </Text>
        </Link>
    );
};

export default TabItem;
