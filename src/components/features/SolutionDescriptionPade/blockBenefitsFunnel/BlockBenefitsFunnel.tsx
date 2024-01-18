import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockBenefitsFunnel.module.css";
import ElemSaleBot from "@/src/components/shared/elemChooseChatBot/ElemSaleBot";
import { useGetSolutionCardsQuery, useGetSolutionQuery } from "@/src/store/services/solutions";
import ListBenefits from "@/src/components/entities/lists/listBenefits/listBenefits";
import { PropsSolutionCard } from "@/src/components/entities/platforms/types";
import { SolutionTag, SolutionPropsTag } from "@/src/components/entities/filters/SolutionTag/SolutionTag";
import { SolutionPropsFilters } from "@/src/components/entities/filters/SolutionTags/SolutionTags";
import { useRouter } from "next/router";

interface BlockBenefitsFunnel {
    cards_description?: string;
    results?: any;
}

interface SolutionFilters {
    id?: number;
    filter?: string;
    tags: [];
}

const BlockBenefitsFunnel: FC<BlockBenefitsFunnel> = ({ results = [], cards_description }) => {
    const { data: DataCards } = useGetSolutionCardsQuery({});
    const router = useRouter();
    const { ids } = router.query;
    const { data } = useGetSolutionQuery(Number(ids));
    console.log(results);

    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"dark"}>
                    <>
                        {results.map((item: any) => (
                            // filter((item: any)=>(item.group === "Интеграции")
                            <div className={styles.filters} key={item.id}>
                                {item.group === "Интеграции" ? (
                                    <>
                                        {item.filters.map((item: SolutionFilters) => (
                                            <div key={item.id}>
                                                {item.filter === "Платежные системы" && (
                                                    <>
                                                        {item.tags.map((item: SolutionPropsTag) => (
                                                            <div key={item.id}>
                                                                <SolutionTag
                                                                    tag={item.tag}
                                                                    is={Boolean(
                                                                        data?.tags?.find(
                                                                            (tag: any) => tag.id === item.id
                                                                        )
                                                                    )}
                                                                />
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </>
                                ) : null}
                            </div>
                        ))}
                    </>
                    <ElemSaleBot text={""} /> решает задачи{" "}
                </Title>
                <div className={styles.text}>
                    <Text type={"reg18"} color={"grey"}>
                        {cards_description}
                    </Text>
                </div>
            </div>
            <div className={styles.blockCard}>
                <ListBenefits results={DataCards?.results} />
            </div>
        </div>
    );
};

export default BlockBenefitsFunnel;
