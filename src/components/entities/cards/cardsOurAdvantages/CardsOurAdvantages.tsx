import React from "react";
import ListCardAdvantages from "@/src/components/entities/lists/listCardAdvantages/ListCardAdvantages";
import {CARDS_OUR_ADVANTAGES} from "@/src/components/entities/cards/cardsOurAdvantages/CardsOurAdvantagesConfig";

import styles from "./styles/CardsOurAdvantages.module.css";

const CardsOurAdvantages = () => {
     return (
          <div className={styles.wrapper}>
               <ListCardAdvantages config={CARDS_OUR_ADVANTAGES}/>
          </div>
     );
};

export default CardsOurAdvantages;