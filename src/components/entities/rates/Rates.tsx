import React, { FC } from "react";

import styles from "./Rates.module.css";
import RateCard, { IRateCard } from "@/src/components/shared/rateCard/RateCard";
import uuid from "uuid-random";
import TextField from "../../shared/textfields/TextField";

interface IRates {
     cards: IRateCard[]
}

const Rates:FC <IRates> = ({cards}) => {
     return (
          <div className={styles.ratesBlock}>
               <TextField type={"h3"} color={"black"}>{"Тарифы"}</TextField>
               <div className={styles.cardsBlock}>
                    {cards.map((card) => <RateCard title={card.title} key={uuid()} descriptions={card.descriptions} price={card.price}/>)}
               </div>
          </div>
     );
};

export default Rates;
