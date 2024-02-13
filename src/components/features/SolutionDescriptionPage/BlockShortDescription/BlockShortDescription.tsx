import React, { useState, FC } from "react";
import styles from "./BlockShortDescription.module.css";
import CardSales from "@/src/components/entities/cards/cardSales/CardSales";
import { SolutionTags } from "@/src/components/entities/filters/SolutionTags/SolutionTags";

interface PropsShortDescription {
    price?: number | string;
    id?: number;
    full_description?: string;
    results?: PropsGroupFilters[];
    dignities?: string[];
}

interface PropsGroupFilters {
    id?: number;
    filters: [];
    group?: string;
    status?: string;
}

const BlockShotDescription: FC<PropsShortDescription> = ({ price, results = [], dignities }) => {
    return (
        <div className={styles.wrapper}>
            <CardSales price={price} dignities={dignities} />
            <div className={styles.blockText}>
                <div className={styles.filtersWrapper}>
                    {results.map((item: PropsGroupFilters) => (
                        <div className={styles.filters} key={item.id}>
                            <SolutionTags filters={item?.filters} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlockShotDescription;
