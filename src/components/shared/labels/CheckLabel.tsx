import React, { FC } from "react";

import styles from "./styles/Label.module.css";
import { Labels } from "@/src/types";

const CheckLabel: FC<Labels> = ({ name, label }) => {
    return (
        <div className={styles.wrapper}>
            {name}
            {label}
        </div>
    );
};

export default CheckLabel;
