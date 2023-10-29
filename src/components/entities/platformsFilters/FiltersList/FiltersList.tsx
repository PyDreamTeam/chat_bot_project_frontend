import React, { FC, useState } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./FiltersList.module.css";
import { PropsGroupFilters } from "../../platforms/types";
import FiltersGroup from "../FiltersGroup/FiltersGroup";
// import Orders from "./Orders";

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
    // const [key, setKey] = useState(0);

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
            {/* <Orders forceUpdate={() => setKey((k) => k + 1)} /> */}
        </div>
    );
};

export default FiltersList;
