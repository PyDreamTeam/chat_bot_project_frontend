import React, { FC } from "react";

import styles from "./styles/CardAboutUs.module.css";
import { TsConfigJson } from "type-fest";
import JSX = TsConfigJson.CompilerOptions.JSX;

export interface ICard {
    id?: number;
    statistic?: JSX.Element;
    title?: JSX.Element;
    text?: JSX.Element;
    img?: JSX.Element;
}

const CardAboutUs: FC<ICard> = ({ statistic, title, text, img }) => {
    return (
        <div className={styles.card}>
            {statistic}
            {title}
            {text}
            {img}
        </div>
    );
};

export default CardAboutUs;
