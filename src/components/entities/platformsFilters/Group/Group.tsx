import React, { FC, useEffect, KeyboardEvent, useState } from "react";
import styles from "./Group.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Text from "@/src/components/shared/text/Text";
import {
    useEditPlatformFilterGroupMutation,
    usePlatformFilterGroupPublicMutation,
    usePlatformFilterGroupSaveMutation,
    usePlatformFilterSaveMutation,
} from "@/src/store/services/platforms";
import { restoreFromArchive } from "../img/SvgConfig";
import InputGroup from "../InputGroup/InputGroup";

interface PropsFilterGroup {
    title?: string;
    id?: number;
    sort?: string;
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
    onDelete: (id: number | undefined, title: string | undefined) => void;
    onRestore?: (id: number | undefined, title: string | undefined) => void;
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

const Group: FC<PropsFilterGroup> = ({ title, id, sort, filters, onDelete, onRestore }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();

    const [publicGroup, { isSuccess, error, isLoading }] = usePlatformFilterGroupPublicMutation();
    const [
        moveToSaveGroup,
        { isSuccess: restoreGroupIsSuccess, error: restoreGroupError, isLoading: restoreGroupIsLoading },
    ] = usePlatformFilterGroupSaveMutation();
    const [editGroup, { isSuccess: editIsSuccess, error: editError, isLoading: editIsLoading }] =
        useEditPlatformFilterGroupMutation();
    const [
        moveToSaveFilter,
        { isSuccess: restoreFilterIsSuccess, error: restoreFilterError, isLoading: restoreFilterIsLoading },
    ] = usePlatformFilterSaveMutation();

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
            setIsShownInput((prevState) => (prevState = true));
        }
        if (value === "deletePublic") {
            if (filters?.length) {
                filters.forEach((item) => {
                    if (item.status === "public") {
                        moveToSaveFilter({ id: item.id, token });
                    }
                });
            }
            moveToSaveGroup({ id, token }).then(router.reload);
        }
        if (value === "public") {
            publicGroup({ id, token });
        }
    };

    const [isShownInput, setIsShownInput] = useState(false);
    const handleKeyDownGroup = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter" || e.key == "NumpadEnter") {
            const title = (e.target as HTMLInputElement).value;
            editGroup({ id, token, title }).then(router.reload);
        }
        if (e.key == "Escape") {
            setIsShownInput((prevState) => (prevState = false));
        }
    };

    return (
        <div className={styles.groupContainer}>
            <InputGroup
                type="edit"
                placeholder=" Добавьте название для группы фильтров"
                value={title}
                isShown={isShownInput}
                onBlur={(e) => {
                    setIsShownInput((prevState) => (prevState = false));
                }}
                onKeyDown={(e) => {
                    handleKeyDownGroup(e);
                }}
            />
            <div className={styles.groupItem}>
                <Text type="sem16" color="black">
                    {title}
                </Text>
                {sort === "archive" ? (
                    <div
                        className={styles.restoreIcon}
                        data-tooltip="Восстановить"
                        onClick={() => {
                            onRestore?.(id, title);
                        }}
                    >
                        {restoreFromArchive}
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

export default Group;
