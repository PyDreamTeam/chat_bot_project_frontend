import React, { FC } from "react";
import styles from "./CardStatistics.module.css";
import { StatisticsCards } from "@/src/types";
import Image from "next/image";
import Title from "../../text/Title";
import Text from "../../text/Text";

export enum CardProps {
    statistic = "statistic",
    funnel = "funnel",
}

const CardStatistics: FC<StatisticsCards> = ({ icon, title, text, variant }) => {
    return (
        <div
            className={`${styles.card} ${variant === CardProps.statistic ? styles.statisticCard : styles.funnelCard} `}
        >
            <div className={styles.img}>
                <Image src={icon ? `${icon}` : ""} alt={"icon"} width={48} height={48} />
            </div>
            <Title type={"h4"} color={"dark"}>
                {title}
            </Title>
            <Text type={"med20"} color={"telegray"}>
                {text}
            </Text>
        </div>
    );
};

export default CardStatistics;
