import React, { FC } from "react";

import styles from "./styles/CardAdvantages.module.css";
import { TsConfigJson } from "type-fest";
import JSX = TsConfigJson.CompilerOptions.JSX;

export interface ICard {
    id?: number;
    icon: React.ReactNode;
    text: JSX.Element;
}

const CardAdvantages: FC<ICard> = ({ icon, text = "" }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            {text}
        </div>
    );
};

export default CardAdvantages;
