import React, { FC } from "react";
import styles from "./CardStatistics.module.css";
import { StatisticsCards} from "@/src/types";

export enum CardProps {
     statistic = "statistic",
     funnel = "funnel",
}

type IElem = {
     variant: CardProps.statistic | CardProps.funnel;
};

const CardStatistics: FC<StatisticsCards & IElem> = ({icon, title, text, variant}) => {
     return (
          <div className={`${styles.card} ${variant === CardProps.statistic ? styles.statisticCard : styles.funnelCard} `}>
               {icon}
               {title}
               {text}
          </div>
     );
};

export default CardStatistics;