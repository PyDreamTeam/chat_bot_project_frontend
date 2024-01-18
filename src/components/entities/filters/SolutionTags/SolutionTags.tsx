import React, { useState, FC } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./SolutionTags.module.css";
import { useRouter } from "next/router";
import { useGetSolutionQuery } from "@/src/store/services/solutions";
import { SolutionTag, SolutionPropsTag } from "../SolutionTag/SolutionTag";

export interface SolutionPropsFilters {
    filters: SolutionFilters[];
}

interface SolutionFilters {
    id?: number;
    filter?: string;
    tags: [];
}

export const SolutionTags: FC<SolutionPropsFilters> = ({ filters = [] }) => {
    const router = useRouter();
    const { ids } = router.query;
    const { data } = useGetSolutionQuery(Number(ids));
    return (
        <>
            {filters.map((item: SolutionFilters) => (
                <div className={styles.filterWrapper} key={item.id}>
                    <div className={styles.filter}>
                        <Text type={"reg14"} color={"telegray"}>
                            {item.filter}
                        </Text>
                    </div>
                    <div className={styles.tags}>
                        {item.tags.map((item: SolutionPropsTag) => (
                            <div className={styles.tag} key={item.id}>
                                <SolutionTag
                                    tag={item.tag}
                                    is={Boolean(data?.tags?.find((tag) => tag.id === item.id))}
                                />
                            </div>
                        ))}
                        ;
                    </div>
                </div>
            ))}
        </>
    );
};
