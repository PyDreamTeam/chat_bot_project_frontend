import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockBenefitsFunnel.module.css";
import ElemSaleBot from "@/src/components/shared/elemChooseChatBot/ElemSaleBot";
import { useGetSolutionCardsQuery, useGetSolutionQuery } from "@/src/store/services/solutions";
import ListBenefits from "@/src/components/entities/lists/listBenefits/listBenefits";
import ReadMore from "@/src/components/features/SolutionDescriptionPage/BlockShortDescription/ReadMore";
import { useRouter } from "next/router";

interface BlockBenefitsFunnel {
    full_description?: string;
    platform?: string;
}

const BlockBenefitsFunnel: FC<BlockBenefitsFunnel> = ({ full_description, platform }) => {
    const { data: DataCards } = useGetSolutionCardsQuery({});

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
                <ListBenefits results={DataCards?.results} />
            </div>
        </div>
    );
};

export default BlockBenefitsFunnel;
