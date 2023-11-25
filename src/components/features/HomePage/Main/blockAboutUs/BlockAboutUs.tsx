import React, { FC, useState } from "react";
import styles from "./styles/BlockAboutUs.module.css";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import CardsAboutUs from "@/src/components/entities/cards/cardsAboutUs/CardsAboutUs";

const BlockAboutUs = () => {
    const [isTruncated, setIsTruncated] = useState(false);
    const toggleText = () => {
        setIsTruncated(!isTruncated);
    };
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
                <div className={isTruncated ? `${styles.text} ${styles.active}` : styles.text} onClick={toggleText}>
                    <Text type={"reg14"} color={"grey"}>
                        С 2018 года автоматизируем продажи, увеличиваем конверсию и эффективность бизнес-процессов,
                        помогаем клиентам достичь нужных результатов с помощью чат-ботов в мессенджерах.
                    </Text>
                    <Text type={"reg14"} color={"grey"}>
                        Работаем “под ключ” на KPI в виде конверсий, заявок и продаж
                        <>{isTruncated ? <>.</> : <>...</>}</>
                    </Text>
                    <Text type={"reg14"} color={"grey"}>
                        Предлагаем вам эффективные и гарантированно качественные шаблоны чат-ботов для быстрого и
                        успешного решения задач бизнеса.
                    </Text>
                    <Text type={"reg14"} color={"grey"}>
                        Главным преимуществом решений- является быстрый запуск. Вам не нужно тратить несколько недель
                        или месяцев на разработку, тестирование, анализ, внесение правок. Мы даем вам готовые шаблоны,
                        уже прошедшие все эти этапы и проверенные на наших клиентах в самых разных нишах. На сайте вы
                        найдете только те решения, которые уже не раз приносили результаты и гарантированно работают.
                    </Text>

                    <Text type={"reg14"} color={"grey"}>
                        Определите, какие задачи вы хотите решить, какие возможности вам необходимы и выберите
                        подходящий вариант. Большой выбор, удобная форма подбора с фильтром, разнообразие категорий
                        помогут вам найти то, что нужно для вашего бизнеса.
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
