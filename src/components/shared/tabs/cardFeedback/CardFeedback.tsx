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
    maxLength?: number;
}

const CardFeedback: FC<ICard> = ({ img, name, jobTitle, text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(false);

    const toggleText = () => {
        setIsTruncated(!isTruncated);
    };

    return (
        <div className={isTruncated ? `${styles.smallCard} ${styles.active}` : styles.smallCard} onClick={toggleText}>
            <div className={styles.top}>
                {img}
                <div className={styles.title}>
                    {name}
                    {jobTitle}
                </div>
            </div>
            {isTruncated ? (
                <div>
                    <Text type={"reg16"} color={"black"}>
                        {text}
                    </Text>
                </div>
            ) : (
                <div className={styles}>
                    <Text type={"reg16"} color={"black"}>
                        {text?.slice(0, maxLength)}...
                    </Text>
                </div>
            )}
        </div>
    );
};

export default CardFeedback;
