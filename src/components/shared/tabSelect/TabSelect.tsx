import React, { FC } from "react";

import styles from "./styles/tabSelect.module.css";

export interface ITabSelect {
     id?: number;
     title?: string;
     icon?: React.ReactNode;
}

export interface TabSelectProps {
     activeTabSelect?: number;
     onClick?: any;
}

const TabSelect: FC<ITabSelect & TabSelectProps> = ({ id, title = "", icon, onClick, activeTabSelect }) => {
     return (
          <div onClick={onClick} className={`${styles.selectTitle} ${activeTabSelect === id ? styles.active : null}`}>
               {title}
               {icon}
          </div>
     );
};

export default TabSelect;
