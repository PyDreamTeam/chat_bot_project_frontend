import React, { FC, useEffect, useState } from "react";
import styles from "./SolutionsFilter.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import DeleteSolutionsFilterPopup from "../popups/DeleteSolutionsFilterPopup";
import Text from "@/src/components/shared/text/Text";
import {
    useDeletePlatformFilterMutation,
    usePlatformFilterGroupPublicMutation,
    usePlatformFilterPublicMutation,
    usePlatformFilterSaveMutation,
} from "@/src/store/services/platforms";
import { deleteFilterSvg, restoreFromArchive } from "@/src/components/entities/platformsFilters/img/SvgConfig";
import {
    usePublicSolutionFilterGroupMutation,
    usePublicSolutionFilterMutation,
    useSaveSolutionFilterMutation,
} from "@/src/store/services/solutions";

interface PropsFilter {
    title: string;
    id?: number;
    sort?: string;
    groupStatus?: string;
    groupId?: number;
    onDelete: (id: number | undefined, title: string) => void;
    refresh?: () => void;
}

const dropdownFilterPublic = [
    { title: "Cнять с публикации", value: "deletePublic" },
    { title: "Редактировать", value: "edit" },
    { title: "Удалить", value: "delete" },
];

const dropdownFilterSave = [
    { title: "Опубликовать", value: "public" },
    { title: "Редактировать", value: "edit" },
    { title: "Удалить", value: "delete" },
];

const SolutionsFilter: FC<PropsFilter> = ({ title, id, sort, groupStatus, groupId, onDelete, refresh }) => {
    const { isShown: isShownDeleteFilter, toggle: toggleDeleteFilter } = useModal();

    const [publicGroup, { isSuccess: publicGroupIsSuccess, isLoading: publicGroupIsLoading }] =
        usePublicSolutionFilterGroupMutation();
    const [publicFilter, { isSuccess, error, isLoading }] = usePublicSolutionFilterMutation();
    const [moveToSaveFilter, { isSuccess: removeIsSuccess, error: removeError, isLoading: removeIsLoading }] =
        useSaveSolutionFilterMutation();
    // const [deleteFilter, { isSuccess: deleteIsSuccess, error: deleteError, isLoading: deleteIsLoading }] =
    //     useDeletePlatformFilterMutation();

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();

    const [stateIcon, setStateIcon] = useState<string>("workPlatform");
    const handleMouseEnter = () => {
        if (stateIcon === "workPlatform") {
            setStateIcon("workPlatformHover");
        }
    };

    const handleMouseLeave = () => {
        if (stateIcon === "workPlatformHover") {
            setStateIcon("workPlatform");
        }
    };

    const handleClickIcon = () => {
        if (stateIcon === "workPlatformHover" || stateIcon === "workPlatform") {
            setStateIcon("workPlatformActive");
        }
        if (stateIcon === "workPlatformActive") {
            setStateIcon("workPlatform");
        }
    };

    const handleDropdownClick = (value: string, id?: number) => {
        if (value === "delete") {
            onDelete(id, title);
        }
        if (value === "edit") {
            router.push(`/admin/solutions/solutions-filters/edit-filter/${id}`);
        }
        if (value === "deletePublic") {
            moveToSaveFilter({ id, token }).then(refresh);
        }
        if (value === "public") {
            if (groupStatus === "save") {
                publicGroup({ id: groupId, token });
            }
            publicFilter({ id, token }).then(refresh);
        }
    };

    return (
        <div>
            <div className={styles.filterItem}>
                <Text type="reg16" color="black">
                    {title}
                </Text>
                {sort === "archive" ? (
                    <div className={groupStatus != "archive" ? styles.restoreIcon : styles.restoreIconHide}>
                        {groupStatus != "archive" && (
                            <div className={styles.iconsContainer}>
                                <div
                                    className={styles.iconReSVG}
                                    data-tooltip="Восстановить"
                                    onClick={() => {
                                        if (groupStatus != "archive") {
                                            moveToSaveFilter({ id, token }).then(refresh);
                                        }
                                    }}
                                >
                                    {restoreFromArchive}
                                </div>
                                <div
                                    className={styles.iconDelSVG}
                                    data-tooltip="Удалить"
                                    onClick={() => {
                                        if (groupStatus != "archive") {
                                            toggleDeleteFilter();
                                        }
                                    }}
                                >
                                    {deleteFilterSvg}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClickIcon}
                        className={styles.workPlatform}
                    >
                        <Image src={`/platforms/${stateIcon}.svg`} alt="icon" width={24} height={24} />
                        {stateIcon === "workPlatformActive" && (
                            <ul className={styles.listFunctions}>
                                {(sort === "save" ? dropdownFilterSave : dropdownFilterPublic).map(
                                    ({ title, value }) => (
                                        <li
                                            key={title}
                                            className={styles.function}
                                            onClick={() => handleDropdownClick(value, id)}
                                        >
                                            <Text
                                                type="reg14"
                                                color="dark"
                                                className={`${styles.titleText} ${
                                                    value === "delete" && styles.titleTextDelete
                                                }`}
                                            >
                                                {title}
                                            </Text>
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                )}
            </div>
            <Modal isShown={isShownDeleteFilter} hide={toggleDeleteFilter}>
                <DeleteSolutionsFilterPopup
                    type="delete"
                    close={toggleDeleteFilter}
                    refresh={refresh}
                    filterId={id}
                    filterTitle={title}
                    filterGroupId={groupId}
                />
            </Modal>
        </div>
    );
};

export default SolutionsFilter;
