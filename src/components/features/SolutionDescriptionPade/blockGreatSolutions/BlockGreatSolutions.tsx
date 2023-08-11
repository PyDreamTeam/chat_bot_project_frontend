import React from "react";

import CardStatistics, { CardProps } from "@/src/components/shared/tabs/cardStatistics/CardStatistics";
import Image from "next/image";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import { StatisticsCards } from "@/src/types";

import styles from "./BlockGreatSolutions.module.css";

const cards: StatisticsCards[] = [
     {
          icon: <Image src={"icon/Клиенты.svg"} alt={"icon"} width={48} height={48}/>,
          title: <Title type={"h4"} color={"dark"}>15K</Title>,
          text: <Text type={"med20"} color={"telegray"}>Обзоров</Text>,
     },
     {
          icon: <Image src={"icon/Покупки.svg"} alt={"icon"} width={48} height={48}/>,
          title: <Title type={"h4"} color={"dark"}>30+</Title>,
          text: <Text type={"med20"} color={"telegray"}>Покупок</Text>,
     },
     {
          icon: <Image src={"icon/Рейтинг.svg"} alt={"icon"} width={48} height={48}/>,
          title: <Title type={"h4"} color={"dark"}>4.8</Title>,
          text: <Text type={"med20"} color={"telegray"}>Рейтинг</Text>,
     },
     {
          icon: <Image src={"icon/Heart.svg"} alt={"icon"} width={48} height={48}/>,
          title: <Title type={"h4"} color={"dark"}>50+</Title>,
          text: <Text type={"med20"} color={"telegray"}>В избранном</Text>,
     }
];

const BlockGreatSolutions = () => {

     return (
          <div className={styles.wrapper}>
               <Title type={"h3"} color={"dark"}>Решение, которым довольны клиенты </Title>
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