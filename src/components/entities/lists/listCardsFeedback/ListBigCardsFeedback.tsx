import React, { FC } from "react";
import BigCardFeedback, { ICard } from "@/src/components/shared/tabs/cardFeedback/BigCardFeedback";

import styles from "./styles/ListCardsFeedback.module.css";

interface ICardFeedback {
    config: ICard[];
}
const ListBigCardsFeedback: FC<ICardFeedback> = ({ config = [] }) => {
    return (
        <div className={styles.BigCards}>
            {config.map((tab) => (
                <BigCardFeedback
                    id={tab.id}
                    key={tab.id}
                    img={tab.img}
                    name={tab.name}
                    jobTitle={tab.jobTitle}
                    text={tab.text}
                />
            ))}
        </div>
    );
};

export default ListBigCardsFeedback;
