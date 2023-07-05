import React from "react";
import ListCardAboutUs from "@/src/components/entities/lists/listCardAboutUs/ListCardAboutUs";
import { CARDS_ABOUT_US } from "@/src/components/entities/cards/cardsAboutUs/CardsAboutUsConfig";

import styles from "./styles/CardsAboutUs.module.css";

const CardsAboutUs = () => {
     return (
          <div className={styles.wrapper}>
               <ListCardAboutUs config={CARDS_ABOUT_US}/>
          </div>
     );
};

export default CardsAboutUs;