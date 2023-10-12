import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import CardStatistics, { CardProps } from "@/src/components/shared/tabs/cardStatistics/CardStatistics";
import { CardsFunnel } from "@/src/types";
import Image from "next/image";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";

import styles from "./BlockBenefitsFunnel.module.css";
import ElemSaleBot from "@/src/components/shared/elemChooseChatBot/ElemSaleBot";

const cards: CardsFunnel[] = [
    {
        icon: <Image src={"/icon/Interaction.svg"} alt={"icon"} width={48} height={48} />,
        title: (
            <Text type={"med20"} color={"dark"}>
                Общение “ученик-учитель”
            </Text>
        ),
        text: (
            <Text type={"reg14"} color={"grey"}>
                Ученик знакомится с учтелем и тесно с ним взаимодействует на всех этапах обучения
            </Text>
        ),
    },
    {
        icon: <Image src={"/icon/Lesson delivery.svg"} alt={"icon"} width={48} height={48} />,
        title: (
            <Text type={"med20"} color={"dark"}>
                Прием домашний заданий
            </Text>
        ),
        text: (
            <Text type={"reg14"} color={"grey"}>
                Все уроки выходят в срок согласно запланированному график и проверяются учителем
            </Text>
        ),
    },
    {
        icon: <Image src={"/icon/Student page.svg"} alt={"icon"} width={48} height={48} />,
        title: (
            <Text type={"med20"} color={"dark"}>
                Страница ученика
            </Text>
        ),
        text: (
            <Text type={"reg14"} color={"grey"}>
                Ученик знакомится с учителем и тесно с ним взаимодействует на всех этапах обучения
            </Text>
        ),
    },
    {
        icon: <Image src={"/icon/Zoom.svg"} alt={"icon"} width={48} height={48} />,
        title: (
            <Text type={"med20"} color={"dark"}>
                Экзамен в Zoom
            </Text>
        ),
        text: (
            <Text type={"reg14"} color={"grey"}>
                Запись на экзамен можно изменить/удалить/подтвердить, когда студент будет готов
            </Text>
        ),
    },
    {
        icon: <Image src={"/icon/Payments.svg"} alt={"icon"} width={48} height={48} />,
        title: (
            <Text type={"med20"} color={"dark"}>
                Прием платежей
            </Text>
        ),
        text: (
            <Text type={"reg14"} color={"grey"}>
                На выбор доступны более 20 платежных сервисов, которые можно подключить{" "}
            </Text>
        ),
    },
    {
        icon: <Image src={"/icon/Certificate.svg"} alt={"icon"} width={48} height={48} />,
        title: (
            <Text type={"med20"} color={"dark"}>
                Выдача сертификата
            </Text>
        ),
        text: (
            <Text type={"reg14"} color={"grey"}>
                После сдачи экзамена куратор выставляет оценку за успешно пройденный экзамен
            </Text>
        ),
    },
];

const BlockBenefitsFunnel = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"dark"}>
                    Воронка на <ElemSaleBot text={"SALEBOT"} /> решает задачи{" "}
                </Title>
                <Text type={"reg18"} color={"grey"}>
                    Воронка продажи онлайн-курса полностью автоматизирована без дополнительных специалистов. Стратегия
                    воронки учтена с переходом в мессенджер Telegram, где происходит взаимодействие с пользователем
                </Text>
            </div>
            <div className={styles.blockCard}>
                {cards.map((item, index) => (
                    <CardStatistics
                        variant={CardProps.funnel}
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlockBenefitsFunnel;
