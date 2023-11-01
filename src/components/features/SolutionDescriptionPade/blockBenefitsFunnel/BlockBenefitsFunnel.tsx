import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockBenefitsFunnel.module.css";
import ElemSaleBot from "@/src/components/shared/elemChooseChatBot/ElemSaleBot";
import { useGetSolutionCardsQuery } from "@/src/store/services/solutions";
import ListBenefits from "@/src/components/entities/lists/listBenefits/listBenefits";

const BlockBenefitsFunnel: FC = () => {
    const { data } = useGetSolutionCardsQuery({});
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
                <ListBenefits results={data?.results} />
            </div>
        </div>
    );
};

export default BlockBenefitsFunnel;
