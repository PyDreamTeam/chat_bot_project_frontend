import React, { useState } from "react";
import { CARDS_FEEDBACK } from "@/src/components/entities/cards/cardsFeedback/CardsFeedbackConfig";

import styles from "./styles/Slider.module.css";
import ListCardsSolutions from "../../entities/lists/listCardsSolutions/ListCardsSolutions";
import { CARDS_SOLUTIONS } from "./CardsSolutionsConfig";
import ArrowSlideRight from "../arrowSlideRight/ArrowSlideRight";
import ArrowSlideLeft from "../arrowSlideLeft/ArrowSlideLeft";

const Slider = () => {
     const CARD_WIDTH = 468;

     const handleRightClick = () => {
          setOffset((currentOffset) => {
               const newOffset = currentOffset - CARD_WIDTH;
               const maxOffset = -CARD_WIDTH * (CARDS_SOLUTIONS.length - 1);

               console.log(newOffset);
               return Math.max(newOffset, maxOffset);
          });
     };
     const handleLeftClick = () => {
          setOffset((currentOffset) => {
               const newOffset = currentOffset + CARD_WIDTH;

               console.log(newOffset);
               return Math.min(newOffset, 0);
          });
     };

     const [offset, setOffset] = useState(0);

     return (
          <div className={styles.wrapper}>
               <div className={styles.window}>
                    <div className={styles.itemsContainer} style={{ transform: `translateX(${offset}px)` }}>
                         <ListCardsSolutions config={CARDS_SOLUTIONS} />
                    </div>
               </div>
               <div className={styles.arrows}>
                    <ArrowSlideLeft className={styles.arrow} onClick={handleLeftClick} />
                    <ArrowSlideRight className={styles.arrow} onClick={handleRightClick} />
               </div>
          </div>
     );
};

export default Slider;
