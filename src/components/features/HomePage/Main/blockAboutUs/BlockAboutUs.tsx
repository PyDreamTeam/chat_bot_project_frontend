import React from "react";
import styles from "./styles/BlockAboutUs.module.css";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import CardsAboutUs from "@/src/components/entities/cards/cardsAboutUs/CardsAboutUs";

const BlockAboutUs = () => {
    return (
        <div className={styles.wrapper}>
            <CardsAboutUs />
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    Кто мы?
                </Title>
                <Title type={"h5"} color={"dark"}>
                    Мы - агенство мессенджер-маркетинга Townsend
                </Title>
                <div>
                    <Text type={"reg14"} color={"grey"}>
                        С 2018 года автоматизируем продажи, увеличиваем конверсию и эффективность бизнес-процессов,
                        помогаем клиентам достичь нужных результатов с помощью чат-ботов в мессенджерах.
                    </Text>
                    <Text type={"reg14"} color={"grey"}>
                        Работаем “под ключ” на KPI ввиде конверсий, заявок и продаж...
                    </Text>
                </div>
                <div className={styles.statistics}>
                    <Title type={"h4"} color={"dark"}>
                        <span className={styles.circleYellow}></span> 94%
                    </Title>
                    <Title type={"h4"} color={"dark"}>
                        <span className={styles.circleBlue}></span>70M+
                    </Title>
                    <Title type={"h4"} color={"dark"}>
                        <span className={styles.circleBrown}></span>10K+
                    </Title>
                </div>
            </div>
        </div>
    );
};

export default BlockAboutUs;
