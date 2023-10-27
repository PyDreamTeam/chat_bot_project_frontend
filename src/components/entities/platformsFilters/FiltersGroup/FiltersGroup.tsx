import React, { FC, useEffect, useState } from "react";
import uuid from "uuid-random";
import { Loader } from "@/src/components/shared/Loader/Loader";
import styles from "./FiltersGroup.module.css";
import Cookies from "js-cookie";
import Text from "@/src/components/shared/text/Text";

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

interface PropsFiltersGroup {
    groupData: PropsPlatformFilters;
}

const FiltersGroup: FC<PropsFiltersGroup> = ({ groupData }) => {
    // const [orders, setOrders] = useState<PropsOrder[]>([]);
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    // const { data: dataOrders, isLoading: isLoadingOrders } = useGetOrdersListQuery(token, {
    //     refetchOnMountOrArgChange: true,
    // });

    // useEffect(() => {
    //     if (dataOrders) {
    //         const sortOrders = [...dataOrders.results];
    //         sortOrders?.sort(compareItems);
    //         setOrders(sortOrders);
    //     }
    // }, []);

    return (
        <div>
            <div className={styles.groupItem}>
                <Text type="sem16" color="black">
                    {groupData.group}
                </Text>
            </div>
            <ul className={styles.groupFilters}>
                {groupData.filters?.map((item) => (
                    <li key={uuid()}>
                        <div className={styles.filterItem}>
                            <Text type="reg16" color="black">
                                {item.filter}
                            </Text>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FiltersGroup;
