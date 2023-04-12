import React, { FC } from "react";

import styles from "./RateCard.module.css";

import uuid from "uuid-random";
import Text from "../textfields/Text";
import ButtonSubmit from "../buttons/ButtonSubmit";
import ButtonAuthHeader from "../buttons/ButtonAuthHeader";

export interface IRateCard {
     title: string;
     price: number;
     descriptions: string[];
}

const RateCard: FC<IRateCard> = ({ title, price, descriptions }) => {
     const transformedPrice = () => {
          return `От ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
     };

     return (
          <div className={styles.cardBlock}>
               <div className={styles.cardTextBlock}>
                    <Text type={"h4"} color={"black"}>
                         {title}
                    </Text>
                    <Text type={"h3"} color={"blue"} >{transformedPrice()}</Text>
                    <div className={styles.descriptionsBlock}>
                         {descriptions.map((description) => (
                              <Text key={uuid()} type={"p"} color={"black"}>
                                   {description}
                              </Text>
                         ))}
                    </div>
               </div>
               <ButtonSubmit text={"Выбрать"} isDisabled={true} />
          </div>
     );
};

export default RateCard;