import React, { FC } from "react";
import styles from "./listBenefits.module.css";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import CardStatistics, { CardProps } from "@/src/components/shared/tabs/cardStatistics/CardStatistics";

const ListBenefits: FC<PropsSolutionCard> = ({ cards }) => {
    return (
        <>
            {cards?.map((item, index) => (
                <div key={index} className={styles.funnelCard}>
                    <CardStatistics variant={CardProps.funnel} icon={item.img} title={item.title} text={item.text} />
                </div>
            ))}
        </>
    );
};

export default ListBenefits;
