import React, { FC, useState } from "react";
import styles from "./FiltersList.module.css";
import FiltersGroup from "../FiltersGroup/FiltersGroup";

interface PropsPlatformFilters {
    id?: number;
    status?: string;
    group?: string;
    filters?: {
        filter: string;
        id: number;
        image: string;
        count: number;
        functionality: string;
        integration: string;
        multiple: boolean;
        tags: {
            id: number;
            tag: string;
        }[];
    }[];
}

interface PropsTest {
    tagsData: PropsPlatformFilters[];
    sort: string;
}

const FiltersList: FC<PropsTest> = ({ tagsData, sort }) => {
    return (
        <div className={styles.filtersListWrapper}>
            <ul>
                {tagsData
                    .filter((item: any) => item.status === sort)
                    .map((item: any) => (
                        <li key={item.id}>
                            <FiltersGroup groupData={item} sort={sort} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default FiltersList;
