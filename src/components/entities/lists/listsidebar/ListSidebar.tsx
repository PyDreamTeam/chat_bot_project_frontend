import React, { FC } from "react";
import styles from "./styles/ListSidebar.module.css";

import TabItem, { ITabItem, TabItemProps } from "../../../shared/tabs/tabitem/TabItem";
import ButtonExit from "@/src/components/shared/buttons/ButtonExit";

interface IListSidebar {
     config: ITabItem[];
}

const ListSidebar: FC<IListSidebar & TabItemProps> = ({ config = [], activeTabItem }) => {
     return (
          <nav className={styles.list}>
               {config.map((tab) => (
                    <TabItem 
                         href={tab.href} 
                         activeTabItem={activeTabItem}
                         key={tab.id}
                         id={tab.id}
                         title={tab.title}
                         icon={tab.icon}
                    />
               ))}
               <ButtonExit onClick={() => console.log("Пользователь вышел из регистрации")}/>
          </nav>
     );
};

export default ListSidebar;