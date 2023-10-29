import React, { FC, useEffect, useState } from "react";
import uuid from "uuid-random";
import { Loader } from "@/src/components/shared/Loader/Loader";
import styles from "./FiltersGroup.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Text from "@/src/components/shared/text/Text";
import Filter from "../Filter/Filter";
import Group from "../Group/Group";

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
    sort: string;
}

const FiltersGroup: FC<PropsFiltersGroup> = ({ groupData, sort }) => {
    return (
        <div>
            <Group title={groupData.group} id={groupData.id} sort={sort} />
            <ul className={styles.groupFilters}>
                {groupData.filters?.map((item) => (
                    <li key={uuid()}>
                        <Filter title={item.filter} id={item.id} sort={sort} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FiltersGroup;
