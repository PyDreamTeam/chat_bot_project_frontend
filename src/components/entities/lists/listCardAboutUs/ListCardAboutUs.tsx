import React, { FC } from "react";
import CardAboutUs, { ICard } from "@/src/components/shared/tabs/cardAboutUs/cardAboutUs";

import styles from "./styles/ListCardAboutUs.module.css";

interface ICardAdvantages {
    config: ICard[];
}
const ListCardAboutUs: FC<ICardAdvantages> = ({ config = [] }) => {
    return (
        <div className={styles.cards}>
            {config.map((tab) => (
                <CardAboutUs
                    id={tab.id}
                    key={tab.id}
                    statistic={tab.statistic}
                    title={tab.title}
                    text={tab.text}
                    img={tab.img}
                />
            ))}
        </div>
    );
};

export default ListCardAboutUs;
