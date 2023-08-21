import React, { FC } from "react";

import CardAdvantages, { ICard } from "@/src/components/shared/tabs/cardAdvantages/cardAdvantages";

import styles from "./styles/ListCardAdvantages.module.css";

interface ICardAdvantages {
    config: ICard[];
}
const ListCardAdvantages: FC<ICardAdvantages> = ({ config = [] }) => {
    return (
        <div className={styles.cards}>
            {config.map((tab) => (
                <CardAdvantages id={tab.id} key={tab.id} icon={tab.icon} text={tab.text} />
            ))}
        </div>
    );
};

export default ListCardAdvantages;
