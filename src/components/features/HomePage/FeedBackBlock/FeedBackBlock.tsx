import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import { CARDS_FEEDBACK } from "@/src/components/entities/cards/cardsFeedback/CardsFeedbackConfig";
import ListCardsFeedback from "@/src/components/entities/lists/listCardsFeedback/ListCardsFeedback";
import styles from "./FeedBackBlock.module.css";

const FeedBackBlock = () => {
     return (
          <div className={styles.wrapper}> 
               <div className={styles.title}>
                    <Title type={"h3"} color={"dark"}>Отзывы</Title>
                    <Text type={"reg16"} color={"grey"}>Что говорят о нас наши клиенты</Text>
               </div>
               <ListCardsFeedback config={CARDS_FEEDBACK} />
          </div>
     );
};

export default FeedBackBlock;