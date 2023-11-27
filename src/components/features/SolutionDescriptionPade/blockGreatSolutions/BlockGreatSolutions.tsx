import React from "react";

import CardStatistics, { CardProps } from "@/src/components/shared/tabs/cardStatistics/CardStatistics";
import Image from "next/image";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import { StatisticsCards } from "@/src/types";

import styles from "./BlockGreatSolutions.module.css";

const cards: StatisticsCards[] = [
    {
        icon: "/icon/Clients.svg",
        title: "15K",
        text: "Обзоров",
    },
    {
        icon: "/icon/Purchases.svg",
        title: " 30+",
        text: "Покупок",
    },
    {
        icon: "/icon/Rating.svg",
        title: "4.8",
        text: "Рейтинг",
    },
    {
        icon: "/icon/Heart.svg",
        title: "50+",
        text: "В избранном",
    },
];

const BlockGreatSolutions = () => {
    return (
        <div className={styles.wrapper}>
            <Title type={"h3"} color={"dark"}>
                Решение, которым довольны клиенты
            </Title>
            <div className={styles.blockCards}>
                {cards.map((item, index) => (
                    <CardStatistics
                        variant={CardProps.statistic}
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlockGreatSolutions;
