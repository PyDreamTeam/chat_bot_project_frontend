import React, { useState, FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockShotDescription.module.css";
import { Labels } from "@/src/types";
import CheckLabel from "@/src/components/shared/labels/CheckLabel";
import CardSales from "@/src/components/entities/cards/cardSales/CardSales";
import ReadMore from "@/src/components/features/SolutionDescriptionPade/blockShotDescription/ReadMore";
import { PropsSolutionCard } from "@/src/components/entities/platforms/types";
import Label from "@/src/components/shared/labels/Label";

const BlockShotDescription: FC<PropsSolutionCard> = ({
    id,
    subtitle,
    full_description,
    business_model,
    business_area,
    business_niche,
    solution_type,
    objective,
    price,
    messengers,
    platform,
    integration_with_CRM,
    integration_with_payment_systems,
    dignity,
}) => {
    return (
        <div className={styles.wrapper}>
            <CardSales price={price} dignity={dignity} />
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    {subtitle}
                </Title>
                <div className={styles.blockLabel}>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Бизнес модель:
                        </Text>
                        {business_model}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Сфера бизнеса:
                        </Text>
                        {business_area}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Тип решения:
                        </Text>
                        {solution_type}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Цели:
                        </Text>
                        {objective}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Ниша бизнеса:
                        </Text>
                        {business_niche}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Платформа:
                        </Text>
                        {platform}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Мессенджеры:
                        </Text>

                        {messengers}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Интеграция с CRM:
                        </Text>
                        {integration_with_CRM}
                    </div>
                    <div className={styles.tagsWrapper}>
                        <Text type={"reg14"} color={"telegray"}>
                            Интеграция с платежными системами:
                        </Text>
                        {integration_with_payment_systems}
                    </div>
                </div>
                <ReadMore text={full_description} maxLength={186} />
            </div>
        </div>
    );
};

export default BlockShotDescription;
