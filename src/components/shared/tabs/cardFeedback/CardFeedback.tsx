import React, { FC, useState } from "react";
import Text from "../../text/Text";
import styles from "./styles/CardFeedback.module.css";
import { TsConfigJson } from "type-fest";
import JSX = TsConfigJson.CompilerOptions.JSX;

export interface ICard {
    id?: number;
    img: React.ReactNode;
    name: JSX.Element;
    jobTitle: JSX.Element;
    text: string;
}

const CardFeedback: FC<ICard> = ({ img, name, jobTitle, text }) => {
    return (
        <div className={`${styles.card} ${styles.smallCard}`}>
            <div className={styles.top}>
                {img}
                <div className={styles.title}>
                    {name}
                    {jobTitle}
                </div>
            </div>
            <Text type="reg18" color="black">
                {text}
            </Text>
        </div>
    );
};

export default CardFeedback;
