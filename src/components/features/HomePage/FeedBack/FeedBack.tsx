import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import { CARDS_FEEDBACK_ALL } from "@/src/components/entities/cards/cardsFeedback/CardsFeedbackAllConfig";
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
                <ListBigCardsFeedback config={CARDS_FEEDBACK_ALL} />
            </div>
        </>
    );
};

export default FeedBack;
