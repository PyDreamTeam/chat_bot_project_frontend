import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import ArrowRight from "@/src/components/shared/arrowRight/ArrowRight";
import CardsFeedback from "@/src/components/entities/cards/cardsFeedback/CardsFeedback";
import styles from "./styles/BlockFeedback.module.css";
import Link from "next/link";

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
                    <Link href={"/"} className={styles.link}>
                         <Text type={"reg16"} color={"blue"}>
                              Посмотреть все
                         </Text>
                         <ArrowRight className={styles.arrow}></ArrowRight>
                    </Link>
               </div>
               <CardsFeedback />
          </div>
     );
};

export default BlockFeedback;
