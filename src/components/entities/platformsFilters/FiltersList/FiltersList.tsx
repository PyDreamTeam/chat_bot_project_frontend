import React, { FC, useState } from "react";
import styles from "./FiltersList.module.css";
import FiltersGroup from "../FiltersGroup/FiltersGroup";
import uuid from "uuid-random";
import Filter from "../Filter/Filter";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

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
    refresh?: () => void;
}

const FiltersList: FC<PropsTest> = ({ tagsData, sort, refresh }) => {
    return (
        <div className={styles.filtersListWrapper}>
            <ul>
                {sort === "save"
                    ? tagsData
                          .filter((item: any) => item.status === sort || item.status === "public")
                          .map((item: any) => (
                              <li key={item.id}>
                                  {(item.filters.filter((f: any) => f.status === "save").length > 0 ||
                                      item.status === sort) && (
                                      <FiltersGroup groupData={item} sort={sort} refresh={refresh} />
                                  )}
                              </li>
                          ))
                    : tagsData
                          .filter((item: any) => item.status === sort)
                          .map((item: any) => (
                              <li key={item.id}>
                                  <FiltersGroup groupData={item} sort={sort} refresh={refresh} />
                              </li>
                          ))}
            </ul>
            {sort === "public" && (
                <div className={styles.additionalFilters}>
                    <div>
                        {tagsData.filter((item: any) => item.status === sort).length > 0 ? null : (
                            <div className={styles.noResultsImg}>
                                <Image src="/admin/platform_plus.svg" alt="icon" width={120} height={120} />
                                <Text type="med18btn" color="dark">
                                    Опубликованных фильтров пока нет
                                </Text>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {sort === "archive" && (
                <div className={styles.additionalFilters}>
                    <div>
                        {tagsData.filter((item: any) => item.status === sort).length > 0 ||
                        tagsData
                            .filter((item: any) => item.status != sort)
                            .find((group) => group.filters?.find((filter) => filter.status === "archive")) !=
                            undefined ? (
                            <div>
                                <Text type="sem16" color="grey">
                                    Фильтры в составе опубликованных или созданных групп
                                </Text>
                                <ul>
                                    {tagsData
                                        .filter((group: any) => group.status != sort)
                                        .map((item: any) => {
                                            const groupStatus = item.status;
                                            const group = item.group;
                                            return item.filters
                                                .filter((filter: any) => filter.status === "archive")
                                                .map((item: any) => (
                                                    <li key={uuid()}>
                                                        <Filter
                                                            title={item.filter}
                                                            id={item.id}
                                                            sort={sort}
                                                            groupStatus={groupStatus}
                                                            groupTitle={group}
                                                            onDelete={() => null}
                                                            refresh={refresh}
                                                        />
                                                    </li>
                                                ));
                                        })}
                                </ul>
                            </div>
                        ) : (
                            <div className={styles.noResultsImg}>
                                <Image src="/admin/platform_search.svg" alt="icon" width={120} height={120} />
                                <Text type="med18btn" color="dark">
                                    Фильтров в архиве пока нет
                                </Text>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FiltersList;
