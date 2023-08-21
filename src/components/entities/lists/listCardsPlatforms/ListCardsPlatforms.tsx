import React, { FC } from "react";
import styles from "./styles/ListCardsPlatforms.module.css";
import CardSolution, { ICardSolution } from "@/src/components/shared/tabs/cardSolution/CardSolution";
import CardPlatform, { ICardPlatform } from "@/src/components/shared/tabs/cardPlatform/CardPlatform";

export interface IListCardsPlatforms {
    config: ICardPlatform[];
}

const ListCardsPlatforms: FC<IListCardsPlatforms> = ({ config = [] }) => {
    return (
        <div className={styles.cards}>
            {config.map((tab) => (
                <CardPlatform
                    id={tab.id}
                    key={tab.id}
                    logo={tab.logo}
                    title={tab.title}
                    favorite={tab.favorite}
                    description={tab.description}
                    features={tab.features}
                    messengers={tab.messengers}
                />
            ))}
        </div>
    );
};

export default ListCardsPlatforms;
