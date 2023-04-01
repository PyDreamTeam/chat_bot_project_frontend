import React, { FC } from "react";
import styles from "./styles/ListSidebar.module.css";

import TabItem, { ITabItem, TabItemProps } from "../../../shared/tabs/tabitem/TabItem";

interface IListSidebar {
     config: ITabItem[];
     onClick?: (id: number) => void;
}

const ListSidebar: FC<IListSidebar & TabItemProps> = ({ config = [], onClick, activeTabItem }) => {
     return (
          <nav className={styles.list}>
               {config.map((tab) => (
                    <TabItem
                         href={tab.href}
                         activeTabItem={activeTabItem}
                         key={tab.id}
                         id={tab.id}
                         title={tab.title}
                         onClick={() => onClick(tab.id)}
                         icon={tab.icon}
                    />
               ))}
          </nav>
     );
};

export default ListSidebar;