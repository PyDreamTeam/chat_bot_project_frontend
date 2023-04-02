import React, { FC } from "react";
import TabCheck from "@/src/components/shared/tabs/tabCheck/TabCheck";

import styles from "./styles/ListWithCheck.module.css";

export interface ListItem {
     id: number;
     icon: React.ReactNode;
     title: string;
}

export interface IListWithCheck {
     titleConfig: Array<ListItem>;
}

const ListWithCheck: FC<IListWithCheck> = ({ titleConfig }) => {
     return (
          <div className={styles.listItem}>
               {titleConfig.map((item) => (
                    <TabCheck id={item.id} icon={item.icon} title={item.title} key={item.id} />
               ))}
          </div>
     );
};

export default ListWithCheck;
