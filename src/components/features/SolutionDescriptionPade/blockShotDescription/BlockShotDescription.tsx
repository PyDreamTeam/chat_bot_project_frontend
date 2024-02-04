import React, { FC } from "react";
import Title from "@/src/components/shared/text/Title";
import styles from "./BlockShotDescription.module.css";
import CardSales from "@/src/components/entities/cards/cardSales/CardSales";
import ReadMore from "@/src/components/features/SolutionDescriptionPage/blockShortDescription/ReadMore";
import { useGetSolutionDignitiesQuery } from "@/src/store/services/solutions";
import { SolutionTags } from "@/src/components/entities/filters/SolutionTags/SolutionTags";

interface PropsShortDescription {
    price?: number | string;
    subtitle?: string;
    full_description?: string;
    results?: PropsGroupFilters[];
}
interface PropsGroupFilters {
    id?: number;
    filters: [];
    group?: string;
    status?: string;
}

const BlockShotDescription: FC<PropsShortDescription> = ({ results = [], subtitle, full_description, price }) => {
    const { data } = useGetSolutionDignitiesQuery({});
    return (
        <div className={styles.wrapper}>
            <CardSales price={price} results={data?.results} />
            <div className={styles.blockText}>
                <Title className={styles.title} type={"h3"} color={"black"}>
                    {subtitle}
                </Title>
                <div className={styles.filtersWrapper}>
                    {results.map((item: PropsGroupFilters) => (
                        <div className={styles.filters} key={item.id}>
                            <SolutionTags filters={item.filters} />
                        </div>
                    ))}
                </div>
                <ReadMore text={full_description} maxLength={186} />
            </div>
        </div>
    );
};

export default BlockShotDescription;
