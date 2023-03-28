import React, { FC } from "react";

import styles from "./RateCard.module.css";
import TextField from "@/src/components/shared/text/TextField";
import uuid from "uuid-random";

export interface IRateCard {
     title: string,
     price: number,
     descriptions: string[]
}

const RateCard: FC <IRateCard> = ({title,price, descriptions}) => {

     const transformedPrice = () => {
          return `От ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
     } ;

     return (
          <div className={styles.cardBlock}>
               <div className={styles.cardTextBlock}>
                    <TextField type={"h4"} color={"black"}>{title}</TextField>
                    <p className={styles.price}>{transformedPrice()}</p>
                    <div className={styles.descriptionsBlock}>
                         {descriptions.map((description) => <TextField key={uuid()} type={"p"} color={"black"}>{description}</TextField>)}
                    </div>
               </div>
          </div>
     );
};

export default RateCard;
