import React, { FC } from "react";
import styles from "./styles/ListCardsTariffs.module.css";
import { TariffCardAdmin } from "../../cards/cardsTariffs/TariffCardAdmin/TariffCardAdmin";
import { TariffCard } from "@/src/components/entities/cards/cardsTariffs/TariffCard/TariffCard";

export interface ITariffCard {
    id: number;
    tags_of_rates: string[];
    title: string;
    price: string;
    created_at?: string;
    is_special: string | null;
}

export interface IListCardsTariffs {
    results: ITariffCard[];
    type: "main" | "admin";
}

const ListCardsTariffs: FC<IListCardsTariffs> = ({ results = [], type }) => {
    const sortedTariffs = [...results];

    return (
        <>
            {type === "admin" ? (
                <div className={styles.cardsContainer}>
                    {sortedTariffs
                        .sort((a, b) => a.id - b.id)
                        .map((item: ITariffCard) => (
                            <TariffCardAdmin
                                key={item.id}
                                title={item.title}
                                id={item.id}
                                price={item.price}
                                advantages={item.tags_of_rates}
                                hotPlan={item.is_special === "hot plan" ? true : false}
                            />
                        ))}
                </div>
            ) : (
                <div className={styles.cardsContainerMain}>
                    {sortedTariffs
                        .sort((a, b) => a.id - b.id)
                        .map((item: ITariffCard) => (
                            <TariffCard
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                advantages={item.tags_of_rates}
                                hotPlan={item.is_special === "hot plan" ? true : false}
                            />
                        ))}
                </div>
            )}
        </>
    );
};

export default ListCardsTariffs;
