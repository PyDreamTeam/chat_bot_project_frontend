import React, { FC, useEffect, useState } from "react";
import uuid from "uuid-random";
import styles from "./FiltersGroup.module.css";
import Filter from "../Filter/Filter";
import FiltersGroupTitle from "../FiltersGroupTitle/FiltersGroupTitle";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import DeleteFilterPopup from "../popups/DeleteFilterPopup";
import DeleteFilterGroupPopup from "../popups/DeleteFilterGroupPopup";
import RestoreFilterGroupPopup from "../popups/RestoreFilterGroupPopup";
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

interface PropsFiltersGroup {
    groupData: PropsPlatformFilters;
    sort: string;
    refresh?: () => void;
}

const FiltersGroup: FC<PropsFiltersGroup> = ({ groupData, sort, refresh }) => {
    const { isShown: isShownDeleteFilter, toggle: toggleDeleteFilter } = useModal();
    const { isShown: isShownDeleteGroup, toggle: toggleDeleteGroup } = useModal();
    const { isShown: isShownRestoreGroup, toggle: toggleRestoreGroup } = useModal();

    const [filterId, setFilterId] = useState<number | undefined>();
    const [filterTitle, setFilterTitle] = useState<string>();
    const [filterGroupId, setFilterGroupId] = useState<number | undefined>();
    const [filterGroupTitle, setFilterGroupTitle] = useState<string | undefined>();
    const handleDeleteFilter = (filterId: number | undefined, filterTitle: string) => {
        setFilterId(filterId);
        setFilterTitle(filterTitle);
        toggleDeleteFilter();
    };
    const handleDeleteGroup = (filterGroupId: number | undefined, filterGroupTitle: string | undefined) => {
        setFilterGroupId(filterGroupId);
        setFilterGroupTitle(filterGroupTitle);
        toggleDeleteGroup();
    };
    const handleRestoreGroup = (filterGroupId: number | undefined, filterGroupTitle: string | undefined) => {
        setFilterGroupId(filterGroupId);
        setFilterGroupTitle(filterGroupTitle);
        toggleRestoreGroup();
    };

    return (
        <div>
            <FiltersGroupTitle
                title={groupData.group}
                id={groupData.id}
                sort={sort}
                filters={groupData.filters}
                onDelete={handleDeleteGroup}
                onRestore={handleRestoreGroup}
                refresh={refresh}
            />
            <ul className={styles.groupFilters}>
                {groupData.filters
                    ?.filter((item: any) => item.status === sort)
                    .map((item) => (
                        <li key={uuid()}>
                            <Filter
                                title={item.filter}
                                id={item.id}
                                sort={sort}
                                groupStatus={groupData.status}
                                groupId={groupData.id}
                                onDelete={handleDeleteFilter}
                                refresh={refresh}
                            />
                        </li>
                    ))}
            </ul>
            <Modal isShown={isShownDeleteGroup} hide={toggleDeleteGroup}>
                <DeleteFilterGroupPopup
                    close={toggleDeleteGroup}
                    filterGroupId={filterGroupId}
                    filterGroupTitle={filterGroupTitle}
                    filters={groupData.filters}
                    refresh={refresh}
                />
            </Modal>
            <Modal isShown={isShownDeleteFilter} hide={toggleDeleteFilter}>
                <DeleteFilterPopup
                    type="archive"
                    close={toggleDeleteFilter}
                    refresh={refresh}
                    filterId={filterId}
                    filterTitle={filterTitle}
                    filterGroupId={groupData.id}
                />
            </Modal>
            <Modal isShown={isShownRestoreGroup} hide={toggleRestoreGroup}>
                <RestoreFilterGroupPopup
                    close={toggleRestoreGroup}
                    filterGroupId={filterGroupId}
                    filterGroupTitle={filterGroupTitle}
                    filters={groupData.filters}
                    refresh={refresh}
                />
            </Modal>
        </div>
    );
};

export default FiltersGroup;
