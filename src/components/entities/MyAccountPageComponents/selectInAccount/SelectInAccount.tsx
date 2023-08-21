import React from "react";

import styles from "./styles/SelectInAccount.module.css";

import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import { SELECT_TITLE_CONFIG } from "@/src/components/entities/selectTitle/SelectTitleConfig";

const SelectInAccount = () => {
    return (
        <div className={styles.selectBlock}>
            <SelectTitle config={SELECT_TITLE_CONFIG} />
        </div>
    );
};

export default SelectInAccount;
