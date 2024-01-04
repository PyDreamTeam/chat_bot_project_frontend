import React, { FC, useEffect, useState } from "react";
import uuid from "uuid-random";
import styles from "./SolutionsFiltersGroup.module.css";
import SolutionsFilter from "../SolutionsFilter/SolutionsFilter";
import SolutionsFiltersGroupTitle from "../SolutionsFiltersGroupTitle/SolutionsFiltersGroupTitle";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import DeleteSolutionsFilterPopup from "../popups/DeleteSolutionsFilterPopup";
import DeleteSolutionsFilterGroupPopup from "../popups/DeleteSolutionsFilterGroupPopup";
import RestoreSolutionsFilterGroupPopup from "../popups/RestoreSolutionsFilterGroupPopup";
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

const SolutionsFiltersGroup: FC<PropsFiltersGroup> = ({ groupData, sort, refresh }) => {
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
            <SolutionsFiltersGroupTitle
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
                            <SolutionsFilter
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
                <DeleteSolutionsFilterGroupPopup
                    close={toggleDeleteGroup}
                    filterGroupId={filterGroupId}
                    filterGroupTitle={filterGroupTitle}
                    filters={groupData.filters}
                    refresh={refresh}
                />
            </Modal>
            <Modal isShown={isShownDeleteFilter} hide={toggleDeleteFilter}>
                <DeleteSolutionsFilterPopup
                    type="archive"
                    close={toggleDeleteFilter}
                    refresh={refresh}
                    filterId={filterId}
                    filterTitle={filterTitle}
                    filterGroupId={groupData.id}
                />
            </Modal>
            <Modal isShown={isShownRestoreGroup} hide={toggleRestoreGroup}>
                <RestoreSolutionsFilterGroupPopup
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

export default SolutionsFiltersGroup;
