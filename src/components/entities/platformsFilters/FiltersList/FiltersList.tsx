import React, { FC, useState } from "react";
import styles from "./FiltersList.module.css";
import FiltersGroup from "../FiltersGroup/FiltersGroup";
import uuid from "uuid-random";
import Filter from "../Filter/Filter";
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
        status: string;
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
                {sort === "save"
                    ? tagsData
                          .filter((item: any) => item.status === sort || item.status === "public")
                          .map((item: any) => (
                              <li key={item.id}>
                                  <FiltersGroup groupData={item} sort={sort} />
                              </li>
                          ))
                    : tagsData
                          .filter((item: any) => item.status === sort)
                          .map((item: any) => (
                              <li key={item.id}>
                                  <FiltersGroup groupData={item} sort={sort} />
                              </li>
                          ))}
            </ul>
            {sort === "archive" && (
                <div className={styles.additionalFilters}>
                    <Text type="sem16" color="grey">
                        Фильтры в составе опубликованных или созданных групп
                    </Text>
                    <ul>
                        {tagsData
                            .filter((group: any) => group.status != sort)
                            .map((item: any) => {
                                const groupStatus = item.status;
                                return item.filters
                                    .filter((filter: any) => filter.status === "archive")
                                    .map((item: any) => (
                                        <li key={uuid()}>
                                            <Filter
                                                title={item.filter}
                                                id={item.id}
                                                sort={sort}
                                                groupStatus={groupStatus}
                                                onDelete={() => null}
                                            />
                                        </li>
                                    ));
                            })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FiltersList;
