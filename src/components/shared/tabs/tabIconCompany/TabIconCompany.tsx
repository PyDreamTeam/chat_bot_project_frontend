import React, { FC } from "react";

import styles from "./styles/TabIconCompany.module.css";

export interface IIcon {
    id: number;
    icon: React.ReactNode;
}

const TabIconCompany: FC<IIcon> = ({ icon }) => {
    return <div className={styles.icons}>{icon}</div>;
};

export default TabIconCompany;
