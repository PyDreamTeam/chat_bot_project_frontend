import React, { FC } from "react";
import styles from "./styles/TabDashboard.module.css";

import Title from "@/src/components/shared/text/Title";
import Link from "next/link";

export interface ITabDashboard {
    id: number;
    title: string;
    icon: React.ReactNode;
    href: string;
}

export interface TabDashboardProps {
    activeTabItem: number | null;
}

const TabDashboard: FC<ITabDashboard & TabDashboardProps> = ({ id, title = "", icon, activeTabItem, href }) => {
    return (
        <Link href={href} className={`${styles.tabItem} ${activeTabItem === id ? styles.active : null}`}>
            {icon}
            <Title type={"h5"} color={"black"}>
                {title}
            </Title>
        </Link>
    );
};

export default TabDashboard;
