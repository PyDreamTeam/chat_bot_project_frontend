import React, { FC } from "react";
import CardFeedback, { ICard } from "@/src/components/shared/tabs/cardFeedback/CardFeedback";

import styles from "./styles/ListCardsSolutions.module.css";
import CardSolution, { ICardSolution } from "@/src/components/shared/tabs/cardSolution/CardSolution";

export interface IListCardsSolutions {
     config: ICardSolution[];
}

const ListCardsSolutions: FC<IListCardsSolutions> = ({ config = [] }) => {
     return (
          <div className={styles.cards}>
               {config.map((tab) => (
                    <CardSolution
                         id={tab.id}
                         key={tab.id}
                         logo={tab.logo}
                         title={tab.title}
                         description={tab.description}
                         features={tab.features}
                         messengers={tab.messengers}
                    />
               ))}
          </div>
     );
};

export default ListCardsSolutions;
