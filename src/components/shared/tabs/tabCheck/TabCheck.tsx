import React, { FC } from "react";

import styles from "./styles/TabCheck.module.css";

export interface ITabCheck {
     id: number;
     icon: React.ReactNode;
     title: string;
}

const TabCheck: FC<ITabCheck> = ({ id, icon, title }) => {
     return (
          <div key={id} className={styles.setting}>
               {icon}
               {title}
          </div>
     );
};

export default TabCheck;
