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
                    Что вы получите
                </Title>
                <Text type={"reg18"} color={"grey"}>
                    Закажите шаблон чат-бота под любую задачу вашего бизнеса. Здесь вы найдете только проверенные
                    решения, созданные на основе нашего 5-летнего опыта. Мы собрали все, что вам нужно для:
                </Text>
            </div>
            <CardsOurAdvantages />
        </div>
    );
};

export default BlockOurAdvantages;
