import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import CardsOurAdvantages from "@/src/components/entities/cards/cardsOurAdvantages/CardsOurAdvantages";
import styles from "./styles/BlockOurAdvantages.module.css";

const BlockOurAdvantages = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.blockText}>
                    <Title type={"h3"} color={"black"}>
                         Наши преимущества
                    </Title>
                    <Text type={"reg18"} color={"grey"}>
                         Мы поможем  решим ваши задачи. Повысим качество обслуживания ваших клиентов. Автоматизируем работу вашей компании, сократим и оптимизируем расходы
                    </Text>
               </div>
               <CardsOurAdvantages/>
          </div>
     );
};

export default BlockOurAdvantages;