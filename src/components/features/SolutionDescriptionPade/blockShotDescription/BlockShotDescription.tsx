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
// import { useGetSolutionsFiltersQuery } from "@/src/store/services/solutions";

// const labels: Labels[] = [
//     {
//         name: (
//             <Text type={"reg14"} color={"telegray"}>
//                 Бизнес модель:{" "}
//             </Text>
//         ),
//         label: (
//             <Text type={"reg14"} color={"dark"}>
//                 B2C{" "}
//             </Text>
//         ),
//     },
//     {
//         name: (
//             <Text type={"reg14"} color={"telegray"}>
//                 Сфера бизнеса:{" "}
//             </Text>
//         ),
//         label: (
//             <Text type={"reg14"} color={"dark"}>
//                 Онлайн-образование
//             </Text>
//         ),
//     },
//     {
//         name: (
//             <Text type={"reg14"} color={"telegray"}>
//                 Тип решения:{" "}
//             </Text>
//         ),
//         label: (
//             <Text type={"reg14"} color={"dark"}>
//                 Комплексная воронка
//             </Text>
//         ),
//     },
//     {
//         name: (
//             <Text type={"reg14"} color={"telegray"}>
//                 Цели:{" "}
//             </Text>
//         ),
//         label: (
//             <Text type={"reg14"} color={"dark"}>
//                 {" "}
//                 Автоматизированный курс
//             </Text>
//         ),
//     },
//     {
//         name: (
//             <Text type={"reg14"} color={"telegray"}>
//                 Ниша бизнеса:{" "}
//             </Text>
//         ),
//         label: (
//             <Text type={"reg14"} color={"dark"}>
//                 Иностранные языки
//             </Text>
//         ),
//     },
// ];

const BlockShotDescription: FC<PropsSolutionCard> = ({
    id,
    title,
    // full_description,
    business_model,
    business_area,
    business_niche,
    solution_type,
    objective,
    price,
}) => {
    return (
        <div className={styles.wrapper}>
            <CardSales price={price} />
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    {title}
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
                </div>
                <ReadMore
                    text="Подходит для инфобизнеса, онлайн-школы по обучению иностранных языков, где компания заинтересована в привлечении первых и последующих клиентов, чтобы они записывались на онлайн-уроки.
                    На начальном этапе работы над проектом составляется бриф, оценивается текущая ситуация и анализируется воронка на предмет ее улучшения. Затем разрабатывается стратегия автоматизации воронки с учетом основных задач клиента.
                    Для оптимизации воронки была выбрана стратегия на основе мессенджера с воронками вебинаров, которые приносили положительные результаты клиентам."
                    maxLength={182}
                />
            </div>
        </div>
    );
};

export default BlockShotDescription;
