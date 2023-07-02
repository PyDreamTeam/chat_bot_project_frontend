import React, { FC } from "react";
import CardFeedback, { ICard } from "@/src/components/shared/tabs/cardFeedback/CardFeedback";

import styles from "./styles/ListCardsFeedback.module.css";

interface ICardFeedback {
     config: ICard[];
}
const ListCardsFeedback: FC<ICardFeedback> = ({ config = [] }) => {
     return (
          <div className={styles.cards}>
               {config.map((tab) => (
                    <CardFeedback id={tab.id} key={tab.id} img={tab.img} name={tab.name} jobTitle={tab.jobTitle} text={tab.text} />
               ))}
          </div>
     );
};

export default ListCardsFeedback;
