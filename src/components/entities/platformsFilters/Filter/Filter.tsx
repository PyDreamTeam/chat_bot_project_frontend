import React, { FC, useEffect, useState } from "react";
import styles from "./Filter.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Text from "@/src/components/shared/text/Text";
import {
    usePlatformFilterGroupPublicMutation,
    usePlatformFilterPublicMutation,
    usePlatformFilterSaveMutation,
} from "@/src/store/services/platforms";
import { restoreFromArchive } from "../img/SvgConfig";

interface PropsFilter {
    title: string;
    id?: number;
    sort?: string;
    groupStatus?: string;
    groupId?: number;
    onDelete: (id: number | undefined, title: string) => void;
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

const Filter: FC<PropsFilter> = ({ title, id, sort, groupStatus, groupId, onDelete }) => {
    const [publicGroup, { isSuccess: publicGroupIsSuccess, isLoading: publicGroupIsLoading }] =
        usePlatformFilterGroupPublicMutation();
    const [publicFilter, { isSuccess, error, isLoading }] = usePlatformFilterPublicMutation();
    const [moveToSaveFilter, { isSuccess: removeIsSuccess, error: removeError, isLoading: removeIsLoading }] =
        usePlatformFilterSaveMutation();

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
            router.push(`/admin/platforms/platforms-filters/edit-filter/${id}`);
        }
        if (value === "deletePublic") {
            moveToSaveFilter({ id, token }).then(router.reload);
        }
        if (value === "public") {
            if (groupStatus === "save") {
                publicGroup({ id: groupId, token });
            }
            publicFilter({ id, token }).then(router.reload);
        }
    };

    return (
        <div>
            <div className={styles.filterItem}>
                <Text type="reg16" color="black">
                    {title}
                </Text>
                {sort === "archive" ? (
                    <div
                        className={groupStatus != "archive" ? styles.restoreIcon : styles.restoreIconHide}
                        data-tooltip="Восстановить"
                        onClick={() => {
                            if (groupStatus != "archive") {
                                moveToSaveFilter({ id, token }).then(router.reload);
                            }
                        }}
                    >
                        {groupStatus != "archive" && restoreFromArchive}
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
        </div>
    );
};

export default Filter;
