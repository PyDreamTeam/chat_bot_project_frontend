import React, { FC, useState } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./SearchFiltersList.module.css";
import { PropsGroupFilters } from "../../platforms/types";
import FiltersGroup from "../FiltersGroup/FiltersGroup";
import Group from "../Group/Group";
import Filter from "../Filter/Filter";
import uuid from "uuid-random";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import DeleteFilterPopup from "../popups/DeleteFilterPopup";
import DeleteFilterGroupPopup from "../popups/DeleteFilterGroupPopup";
import RestoreFilterGroupPopup from "../popups/RestoreFilterGroupPopup";

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

interface PropsSearchFiltersList {
    searchData: PropsSearchFilters;
    tagsData: PropsPlatformFilters[];
    sort: string;
}

const SearchFiltersList: FC<PropsSearchFiltersList> = ({ searchData, tagsData, sort }) => {
    // const [key, setKey] = useState(0);
    const { isShown, toggle } = useModal();
    const { isShown: isShownGroup, toggle: toggleGroup } = useModal();
    const { isShown: isShownRestoreGroup, toggle: toggleRestoreGroup } = useModal();

    const [filterId, setFilterId] = useState<number | undefined>();
    const [filterTitle, setFilterTitle] = useState<string>();
    const [filterGroupId, setFilterGroupId] = useState<number | undefined>();
    const [filterGroupTitle, setFilterGroupTitle] = useState<string | undefined>();
    const [groupData, setGroupData] = useState<PropsPlatformFilters>();
    const handleDelete = (filterId: number | undefined, filterTitle: string) => {
        setFilterId(filterId);
        setFilterTitle(filterTitle);
        toggle();
    };
    const handleDeleteGroup = (filterGroupId: number | undefined, filterGroupTitle: string | undefined) => {
        setFilterGroupId(filterGroupId);
        setFilterGroupTitle(filterGroupTitle);
        toggleGroup();
    };
    const handleRestoreGroup = (filterGroupId: number | undefined, filterGroupTitle: string | undefined) => {
        setFilterGroupId(filterGroupId);
        setFilterGroupTitle(filterGroupTitle);
        const group = tagsData?.find((item) => item.id === filterGroupId);
        setGroupData(group);
        toggleRestoreGroup();
    };

    return (
        <div className={styles.filtersListWrapper}>
            <ul>
                {searchData.group_results
                    .filter((item: any) => item.status === sort)
                    .map((item: any) => (
                        <li key={item.id}>
                            <Group
                                title={item.group}
                                id={item.id}
                                sort={sort}
                                onDelete={handleDeleteGroup}
                                onRestore={handleRestoreGroup}
                            />
                        </li>
                    ))}
            </ul>
            <ul>
                {searchData.filter_results
                    .filter((item: any) => item.status === sort)
                    .map((item) => (
                        <li key={uuid()}>
                            <Filter title={item.title} id={item.id} sort={sort} onDelete={handleDelete} />
                        </li>
                    ))}
            </ul>
            <Modal isShown={isShown} hide={toggle}>
                <DeleteFilterPopup close={toggle} filterId={filterId} filterTitle={filterTitle} />
            </Modal>
            <Modal isShown={isShownGroup} hide={toggleGroup}>
                <DeleteFilterGroupPopup
                    close={toggleGroup}
                    filterGroupId={filterGroupId}
                    filterGroupTitle={filterGroupTitle}
                />
            </Modal>
            <Modal isShown={isShownRestoreGroup} hide={toggleRestoreGroup}>
                <RestoreFilterGroupPopup
                    close={toggleRestoreGroup}
                    filterGroupId={filterGroupId}
                    filterGroupTitle={filterGroupTitle}
                    filters={groupData?.filters}
                />
            </Modal>
        </div>
    );
};

export default SearchFiltersList;