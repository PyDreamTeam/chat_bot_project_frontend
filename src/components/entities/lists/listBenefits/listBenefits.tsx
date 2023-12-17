import React, { FC } from "react";
import styles from "./listBenefits.module.css";
import { StatisticsCards } from "@/src/types";

import CardStatistics, { CardProps } from "@/src/components/shared/tabs/cardStatistics/CardStatistics";
export interface ListStatisticsCards {
    results: StatisticsCards[];
}
const ListBenefits: FC<ListStatisticsCards> = ({ results = [] }) => {
    return (
        <>
            {results.map((item, index) => (
                <div key={index} className={styles.funnelCard}>
                    <CardStatistics variant={CardProps.funnel} icon={item.img} title={item.title} text={item.text} />
                </div>
            ))}
        </>
    );
};

export default ListBenefits;
