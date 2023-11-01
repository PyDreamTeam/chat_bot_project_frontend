import React, { FC, useEffect, useState } from "react";
import uuid from "uuid-random";
import { Loader } from "@/src/components/shared/Loader/Loader";
import styles from "./Group.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Text from "@/src/components/shared/text/Text";
import {
    usePlatformFilterGroupArchiveMutation,
    usePlatformFilterGroupPublicMutation,
    usePlatformFilterGroupSaveMutation,
} from "@/src/store/services/platforms";
import { restoreFromArchive } from "../img/SvgConfig";

interface PropsFilter {
    title?: string;
    id?: number;
    sort?: string;
    onDelete: (id: number | undefined, title: string | undefined) => void;
}

const dropdownFilterPublic = [
    //TODO:save or deletePublic?
    { title: "Cнять с публикации", value: "deletePublic" },
    { title: "Редактировать", value: "edit" },
    { title: "Удалить", value: "delete" },
];

const dropdownFilterSave = [
    { title: "Опубликовать", value: "public" },
    { title: "Редактировать", value: "edit" },
    { title: "Удалить", value: "delete" },
];

const Group: FC<PropsFilter> = ({ title, id, sort, onDelete }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();

    const [publicGroup, { isSuccess, error, isLoading }] = usePlatformFilterGroupPublicMutation();
    const [moveToSaveGroup, { isSuccess: removeIsSuccess, error: removeError, isLoading: removeIsLoading }] =
        usePlatformFilterGroupSaveMutation();

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

    const handleFunctionsPlatforms = (value: string, id?: number) => {
        if (value === "delete") {
            onDelete(id, title);
            // setIsModalDelete(true);
        }
        if (value === "edit") {
            router.push(`/admin/platforms/change-platform/${id}`);
        }
        if (value === "read") {
            router.push(`/platforms/platform/${id}`);
        }
        if (value === "deletePublic") {
            moveToSaveGroup({ id, token });
        }
        if (value === "public") {
            publicGroup({ id, token });
        }
    };

    return (
        <div>
            <div className={styles.groupItem}>
                <Text type="sem16" color="black">
                    {title}
                </Text>
                {sort === "archive" ? (
                    <div
                        className={styles.restoreIcon}
                        data-tooltip="Восстановить"
                        onClick={() => {
                            console.log("restore");
                            moveToSaveGroup({ id, token }).then(router.reload);
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
                                            onClick={() => handleFunctionsPlatforms(value, id)}
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
