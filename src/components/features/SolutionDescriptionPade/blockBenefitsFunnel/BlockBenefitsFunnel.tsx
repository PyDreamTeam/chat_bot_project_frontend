import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockBenefitsFunnel.module.css";
import ElemSaleBot from "@/src/components/shared/elemChooseChatBot/ElemSaleBot";
import { useGetSolutionCardsQuery, useGetSolutionQuery } from "@/src/store/services/solutions";
import ListBenefits from "@/src/components/entities/lists/listBenefits/listBenefits";
import { PropsSolutionCard } from "@/src/components/entities/platforms/types";
import { SolutionTag, SolutionPropsTag } from "@/src/components/entities/filters/SolutionTag/SolutionTag";
import ReadMore from "@/src/components/features/SolutionDescriptionPade/blockShotDescription/ReadMore";
import { SolutionPropsFilters } from "@/src/components/entities/filters/SolutionTags/SolutionTags";
import { useRouter } from "next/router";

interface BlockBenefitsFunnel {
    cards_description?: string;
    full_description?: string;
    results?: any;
    platform?: string;
}

interface SolutionFilters {
    id?: number;
    filter?: string;
    tags: [];
}

const BlockBenefitsFunnel: FC<BlockBenefitsFunnel> = ({
    results = [],
    cards_description,
    full_description,
    platform,
}) => {
    const { data: DataCards } = useGetSolutionCardsQuery({});
    const router = useRouter();
    const { ids } = router.query;
    const { data } = useGetSolutionQuery(Number(ids));

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
