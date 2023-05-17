import React, { FC } from "react";

import styles from "./RateCard.module.css";

import uuid from "uuid-random";
import Text from "../text/Text";
import ButtonSubmit from "../buttons/ButtonSubmit";
import Title from "../text/Title";

export interface IRateCard {
     title: string;
     price: number;
     descriptions: string[];
}

const RateCard: FC<IRateCard> = ({ title, price, descriptions }) => {
     const transformedPrice = () => {
          return `от ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
     };

     return (
          <div className={styles.cardBlock}>
               <div className={styles.cardTextBlock}>
                    <Title type={"h3"} color={"black"}>
                         {title}
                    </Title>
                    <Title type={"h3"} color={"blue"} >{transformedPrice()}</Title>
                    <div className={styles.descriptionsBlock}>
                         {descriptions.map((description) => (
                              <Text key={uuid()} type={"reg20"} color={"black"}>
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