import React, { FC } from "react";

import styles from "./Rates.module.css";
import RateCard, { IRateCard } from "@/src/components/shared/rateCard/RateCard";
import uuid from "uuid-random";
import Title from "../../../shared/textfields/Title";

interface IRates {
     cards: IRateCard[];
}

const Rates: FC<IRates> = ({ cards }) => {
     return (
          <div className={styles.ratesBlock}>
               <Title type={"h3"} color={"black"}>
                    Тарифы
               </Title>
               <div className={styles.cardsBlock}>
                    {cards.map((card) => (
                         <RateCard title={card.title} key={uuid()} descriptions={card.descriptions} price={card.price} />
                    ))}
               </div>
          </div>
     );
};

export default Rates;