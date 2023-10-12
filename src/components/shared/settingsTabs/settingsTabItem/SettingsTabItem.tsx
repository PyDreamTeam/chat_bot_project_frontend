import React, { FC, MouseEventHandler } from "react";

import styles from "./styles/SettingsTabItem.module.css";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import { AccountPageTypes } from "@/src/shared/enums/my-account";

export interface ISettingsTabItem {
    id: number;
    title: string;
    href: string;
}

export interface ISettingsTabItemProps {
    activeTabItem: number;
    tabProps: ISettingsTabItem;
    page?: keyof typeof AccountPageTypes;
}

const SettingsTabItem: FC<ISettingsTabItemProps> = ({ tabProps, activeTabItem, page }) => {
    return (
        <Link
            href={tabProps.href}
            className={`${page ? styles[page] : styles.tabItem}
            ${activeTabItem === tabProps.id ? styles.active : ""}`}
        >
            <Text type={page === "adminPage" ? "reg16" : "med20"} color={"black"}>
                {tabProps.title}
            </Text>
        </Link>
    );
};

export default SettingsTabItem;
