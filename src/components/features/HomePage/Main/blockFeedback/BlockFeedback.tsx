import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import CardsFeedback from "@/src/components/entities/cards/cardsFeedback/CardsFeedback";
import styles from "./styles/BlockFeedback.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";

const BlockFeedback = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.blockText}>
                    <Title type={"h3"} color={"black"}>
                         Отзывы
                    </Title>
                    <Text type={"reg16"} color={"grey"}>
                         Нам доверяют тысячи предпринимателей и клиентов со всего мира
                    </Text>
                    <LinkShowAllCards href="/feedback-page" />
               </div>
               <CardsFeedback />
          </div>
     );
};

export default BlockFeedback;