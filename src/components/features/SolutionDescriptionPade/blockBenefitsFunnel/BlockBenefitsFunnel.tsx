import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockBenefitsFunnel.module.css";
import ElemSaleBot from "@/src/components/shared/elemChooseChatBot/ElemSaleBot";
import { useGetSolutionCardsQuery } from "@/src/store/services/solutions";
import ListBenefits from "@/src/components/entities/lists/listBenefits/listBenefits";
import { PropsSolutionCard } from "@/src/components/entities/platforms/types";

const BlockBenefitsFunnel: FC<PropsSolutionCard> = ({ cards_title, cards_description }) => {
    const { data } = useGetSolutionCardsQuery({});

    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"dark"}>
                    {}
                    <ElemSaleBot text={""} /> решает задачи{" "}
                </Title>
                <div className={styles.text}>
                    <Text type={"reg18"} color={"grey"}>
                        {cards_description}
                    </Text>
                </div>
            </div>
            <div className={styles.blockCard}>
                <ListBenefits results={data?.results} />
            </div>
        </div>
    );
};

export default BlockBenefitsFunnel;
