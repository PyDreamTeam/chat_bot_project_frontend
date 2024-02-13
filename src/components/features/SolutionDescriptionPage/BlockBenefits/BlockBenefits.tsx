import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import styles from "./BlockBenefits.module.css";
import ElemSaleBot from "@/src/components/shared/elemChooseChatBot/ElemSaleBot";
import ListBenefits from "@/src/components/entities/lists/listBenefits/listBenefits";
import ReadMore from "@/src/components/features/SolutionDescriptionPage/BlockShortDescription/ReadMore";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";

const BlockBenefits: FC<PropsSolutionCard> = ({ full_description, platform, cards }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <div className={styles.platformTitle}>
                    <Title type={"h3"} color={"dark"}>
                        Решение на
                    </Title>
                    <ElemSaleBot text={platform} />
                    <Title type={"h3"} color={"dark"}>
                        решает задачи
                    </Title>
                </div>
                <div className={styles.description}>
                    <ReadMore text={full_description} maxLength={186} />
                </div>
            </div>
            <div className={styles.blockCard}>
                <ListBenefits cards={cards} />
            </div>
        </div>
    );
};

export default BlockBenefits;
