import React, { FC, useState } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./FiltersList.module.css";
import { PropsGroupFilters } from "../../platforms/types";
import FiltersGroup from "../FiltersGroup/FiltersGroup";
import Modal from "@/src/components/shared/modal/Modal";
import DeleteFilterPopup from "../DeleteFilterPopup/DeleteFilterPopup";
import { useModal } from "@/src/hooks/useModal";

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
    const { isShown, toggle } = useModal();

    return (
        <div className={styles.filtersListWrapper}>
            <ul>
                {tagsData
                    .filter((item: any) => item.status === sort)
                    .map((item: any) => (
                        <li key={item.id}>
                            <FiltersGroup groupData={item} sort={sort} onDelete={toggle} />
                        </li>
                    ))}
            </ul>
            <Modal isShown={isShown} hide={toggle}>
                <DeleteFilterPopup close={toggle} filterId={"filterId"} />
            </Modal>
            {/* <Orders forceUpdate={() => setKey((k) => k + 1)} /> */}
        </div>
    );
};

export default FiltersList;
