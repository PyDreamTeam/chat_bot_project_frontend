import React, { FC, useEffect, useState } from "react";
import styles from "./FiltersGroupTitle.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import Text from "@/src/components/shared/text/Text";
import {
    usePlatformFilterGroupPublicMutation,
    usePlatformFilterGroupSaveMutation,
    usePlatformFilterPublicMutation,
    usePlatformFilterSaveMutation,
} from "@/src/store/services/platforms";
import { restoreFromArchive } from "../img/SvgConfig";
import InputEditFiltersGroup from "../InputEditFiltersGroup/InputEditFiltersGroup";
import { LoaderSmall } from "@/src/components/shared/LoaderSmall/LoaderSmall";

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
    refresh?: () => void;
}

const dropdownFilterPublic = [
    { title: "Снять с публикации", value: "deletePublic" },
    { title: "Редактировать", value: "edit" },
    { title: "Удалить", value: "delete" },
];

const dropdownFilterSave = [
    { title: "Опубликовать", value: "public" },
    { title: "Редактировать", value: "edit" },
    { title: "Удалить", value: "delete" },
];

const FiltersGroupTitle: FC<PropsFilterGroup> = ({ title, id, sort, filters, onDelete, onRestore, refresh }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [isLoading, setIsLoading] = useState(false);

    const [publicGroup, { isSuccess: publicGroupIsSuccess, isLoading: publicGroupIsLoading }] =
        usePlatformFilterGroupPublicMutation();
    const [publicFilter, { isSuccess: publicFilterIsSuccess, isLoading: publicFilterIsLoading }] =
        usePlatformFilterPublicMutation();
    const [
        moveToSaveGroup,
        { isSuccess: restoreGroupIsSuccess, error: restoreGroupError, isLoading: restoreGroupIsLoading },
    ] = usePlatformFilterGroupSaveMutation();

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
            moveToSaveGroup({ id, token }).then(refresh);
        }
        if (value === "public") {
            if (filters?.length) {
                filters.forEach((item) => {
                    if (item.status === "save") {
                        publicFilter({ id: item.id, token });
                    }
                });
            }
            publicGroup({ id, token }).then(refresh);
        }
    };

    const [isShownInput, setIsShownInput] = useState(false);

    const handleSubmitEditGroup = () => {
        setIsLoading(true);
        if (refresh) refresh();
        setIsShownInput((prevState) => (prevState = false));
    };

    useEffect(() => {
        setIsLoading(false);
    }, [title]);

    return (
        <div className={styles.groupContainer}>
            <InputEditFiltersGroup
                id={id}
                value={title}
                isShown={isShownInput}
                onCancel={() => setIsShownInput((prevState) => (prevState = false))}
                onSubmit={handleSubmitEditGroup}
            />
            <div className={styles.groupItem}>
                {isLoading ? (
                    <div className={styles.loaderPlatforms}>
                        <LoaderSmall isLoading={isLoading} />
                    </div>
                ) : (
                    <Text type="sem16" color="black">
                        {title}
                    </Text>
                )}
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

export default FiltersGroupTitle;
