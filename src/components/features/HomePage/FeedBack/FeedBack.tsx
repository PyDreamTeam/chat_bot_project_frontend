import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import { CARDS_FEEDBACK_ALL } from "@/src/components/entities/cards/cardsFeedback/CardsFeedbackAllConfig";
import { CARDS_FEEDBACK } from "@/src/components/entities/cards/cardsFeedback/CardsFeedbackConfig";
import ListBigCardsFeedback from "@/src/components/entities/lists/listCardsFeedback/ListBigCardsFeedback";
import styles from "./FeedBack.module.css";
import Link from "next/link";

const FeedBack = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                    <Text type="reg14" color="telegray">
                        <Link className={styles.link} href={"/home"}>
                            Главная
                        </Link>
                        /
                        <Link className={styles.link} href={"/home"}>
                            Посмотреть все
                        </Link>
                    </Text>
                </div>
                <div className={styles.title}>
                    <Title type={"h3"} color={"dark"}>
                        Отзывы
                    </Title>
                    <Text type={"reg16"} color={"grey"}>
                        Что говорят о нас наши клиенты
                    </Text>
                </div>
                <ListBigCardsFeedback config={CARDS_FEEDBACK} />
                <div className={styles.accordion}>
                    <section>
                        <input type="checkbox" className={styles.accordion__checkbox} id="accordion-heading-1"></input>
                        <label className={styles.accordion__heading} htmlFor="accordion-heading-1">
                            Меню 1
                        </label>
                        <div className={styles.accordion__content}>
                            <p>Текст 1</p>
                            <p>Текст 1</p>
                            <p>Текст 1</p>
                        </div>
                    </section>

                    <section>
                        <input type="checkbox" className={styles.accordion__checkbox} id="accordion-heading-2"></input>
                        <label className={styles.accordion__heading} htmlFor="accordion-heading-2">
                            Меню 2
                        </label>
                        <div className={styles.accordion__content}>
                            <p>Текст 2</p>
                            <p>Текст 2</p>
                            <p>Текст 2</p>
                        </div>
                    </section>

                    <section>
                        <input type="checkbox" className={styles.accordion__checkbox} id="accordion-heading-3"></input>
                        <label className={styles.accordion__heading} htmlFor="accordion-heading-3">
                            Меню 3
                        </label>
                        <div className={styles.accordion__content}>
                            <p>Текст 3</p>
                            <p>Текст 3</p>
                            <p>Текст 3</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default FeedBack;
