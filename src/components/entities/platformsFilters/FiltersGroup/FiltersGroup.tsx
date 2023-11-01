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
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import DeleteFilterPopup from "../DeleteFilterPopup/DeleteFilterPopup";
import DeleteFilterGroupPopup from "../DeleteFilterPopup/DeleteFilterGroupPopup";
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
    const { isShown, toggle } = useModal();
    const { isShown: isShownGroup, toggle: toggleGroup } = useModal();

    const [filterId, setFilterId] = useState<number | undefined>();
    const [filterTitle, setFilterTitle] = useState<string>();
    const [filterGroupId, setFilterGroupId] = useState<number | undefined>();
    const [filterGroupTitle, setFilterGroupTitle] = useState<string | undefined>();
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

    return (
        <div>
            <Group title={groupData.group} id={groupData.id} sort={sort} onDelete={handleDeleteGroup} />
            <ul className={styles.groupFilters}>
                {groupData.filters?.map((item) => (
                    <li key={uuid()}>
                        <Filter title={item.filter} id={item.id} sort={sort} onDelete={handleDelete} />
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
        </div>
    );
};

export default FiltersGroup;
