import React from "react";

import styles from "./CardSales.module.css";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { Advantages } from "@/src/types";
import TabAdvantages from "@/src/components/shared/tabs/tabAdvantages/TabAdvantages";
import Image from "next/image";
import ButtonFavorite from "@/src/components/shared/buttons/ButtonFavorites";
import ButtonFavorites from "@/src/components/shared/buttons/ButtonFavorites";

export const config: Advantages[] = [
    {
        icon: <Image src={"img/Пункты.svg"} alt={"Пункты"} width={24} height={24} />,
        text: (
            <Text type={"reg16"} color={"grey"}>
                Получение большего количества клиентов
            </Text>
        ),
    },
    {
        icon: <Image src={"img/Пункты.svg"} alt={"Пункты"} width={24} height={24} />,
        text: (
            <Text type={"reg16"} color={"grey"}>
                Привлечение клиентов по сниженной стоимости
            </Text>
        ),
    },
    {
        icon: <Image src={"img/Пункты.svg"} alt={"Пункты"} width={24} height={24} />,
        text: (
            <Text type={"reg16"} color={"grey"}>
                Наглядный контроль отдела продаж
            </Text>
        ),
    },
    {
        icon: <Image src={"img/Пункты.svg"} alt={"Пункты"} width={24} height={24} />,
        text: (
            <Text type={"reg16"} color={"grey"}>
                Высокое качество обслуживанияя
            </Text>
        ),
    },
];

const CardSales = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blueBlock}>
                <div className={styles.price}>
                    <Text type={"reg18"} color={"telegray"}>
                        от
                    </Text>
                    <Title type={"h3"} color={"dark"}>
                        9999
                    </Title>
                    <Text type={"reg18"} color={"telegray"}>
                        RUB
                    </Text>
                </div>
                <div className={styles.advantages}>
                    {config.map((lab, index) => (
                        <TabAdvantages key={index} icon={lab.icon} text={lab.text} />
                    ))}
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <ButtonFavorites text={""} />
            </div>
        </div>
    );
};

export default CardSales;
