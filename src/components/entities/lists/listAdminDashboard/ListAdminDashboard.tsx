import React, { FC } from "react";

import styles from "./styles/ListAdminDashboard.module.css";

import TabDashboard, { ITabDashboard, TabDashboardProps } from "@/src/components/shared/tabs/tabDashboard/TabDashboard";

interface IDashboard {
    config: ITabDashboard[];
}

const ListAdminDashboard: FC<IDashboard & TabDashboardProps> = ({ config = [], activeTabItem }) => {
    return (
        <div className={styles.card}>
            {config.map((tab) => (
                <TabDashboard
                    href={tab.href}
                    activeTabItem={activeTabItem}
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    icon={tab.icon}
                />
            ))}
        </div>
    );
};

export default ListAdminDashboard;
