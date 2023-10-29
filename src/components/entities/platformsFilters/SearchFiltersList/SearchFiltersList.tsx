import React, { FC, useState } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./SearchFiltersList.module.css";
import { PropsGroupFilters } from "../../platforms/types";
import FiltersGroup from "../FiltersGroup/FiltersGroup";
import Group from "../Group/Group";
import Filter from "../Filter/Filter";
import uuid from "uuid-random";

// import Orders from "./Orders";

interface PropsSearchFilters {
    id?: number;
    status?: string;
    group?: string;
    group_results: {
        title: string;
        id: number;
        status: string;
        image: string;
        created_at: string;
    }[];
    filter_results: {
        title: string;
        id: number;
        group: string;
        status: string;
        image: string;
        functionality: string;
        integration: string;
        multiple: boolean;
    }[];
}

interface PropsSearchFiltersList {
    searchData: PropsSearchFilters;
    sort: string;
}

const SearchFiltersList: FC<PropsSearchFiltersList> = ({ searchData, sort }) => {
    // const [key, setKey] = useState(0);

    return (
        <div className={styles.filtersListWrapper}>
            <ul>
                {searchData.group_results
                    .filter((item: any) => item.status === sort)
                    .map((item: any) => (
                        <li key={item.id}>
                            <Group title={item.title} id={item.id} sort={sort} />
                        </li>
                    ))}
            </ul>
            <ul>
                {searchData.filter_results
                    .filter((item: any) => item.status === sort)
                    .map((item) => (
                        <li key={uuid()}>
                            <Filter title={item.title} id={item.id} sort={sort} />
                        </li>
                    ))}
            </ul>
            {/* <Orders forceUpdate={() => setKey((k) => k + 1)} /> */}
        </div>
    );
};

export default SearchFiltersList;
