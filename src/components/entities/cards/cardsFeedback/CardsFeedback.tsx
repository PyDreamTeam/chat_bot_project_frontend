import React from "react";
import ListCardsFeedback from "@/src/components/entities/lists/listCardsFeedback/ListCardsFeedback";
import { CARDS_FEEDBACK } from "@/src/components/entities/cards/cardsFeedback/CardsFeedbackConfig";

import styles from "./styles/CardsFeedback.module.css";

const CardsFeedback = () => {
     return (
          <div className={styles.wrapper}>
               <ListCardsFeedback config={CARDS_FEEDBACK} />
          </div>
     );
};

export default CardsFeedback;
