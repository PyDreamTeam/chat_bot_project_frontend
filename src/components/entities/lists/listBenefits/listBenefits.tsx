import React, { FC } from "react";
import styles from "./CardStatistics.module.css";
import { StatisticsCards } from "@/src/types";

import CardStatistics, { CardProps } from "@/src/components/shared/tabs/cardStatistics/CardStatistics";
export interface ListStatisticsCards {
    results: StatisticsCards[];
}
const ListBenefits: FC<ListStatisticsCards> = ({ results = [] }) => {
    return (
        <>
            {results.map((item: any, index: any) => (
                <div key={index}>
                    <CardStatistics variant={CardProps.funnel} icon={item.img} title={item.title} text={item.text} />
                </div>
            ))}
        </>
    );
};

export default ListBenefits;
