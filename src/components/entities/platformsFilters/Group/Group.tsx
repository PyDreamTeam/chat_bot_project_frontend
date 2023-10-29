import React, { FC, useEffect, useState } from "react";
import uuid from "uuid-random";
import { Loader } from "@/src/components/shared/Loader/Loader";
import styles from "./Group.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Text from "@/src/components/shared/text/Text";

interface PropsFilter {
    title?: string;
    id?: number;
    sort?: string;
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

const Group: FC<PropsFilter> = ({ title, id, sort }) => {
    // const [orders, setOrders] = useState<PropsOrder[]>([]);
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

    const handleFunctionsPlatforms = (value: string, id?: number) => {
        if (value === "delete") {
            // setIsModalDelete(true);
        }
        if (value === "edit") {
            router.push(`/admin/platforms/change-platform/${id}`);
        }
        if (value === "read") {
            router.push(`/platforms/platform/${id}`);
        }
        if (value === "deletePublic") {
            // setIsDeletePlatformFromPublic(true);
            // getPlatformForArchive(Number(id));
        }
        if (value === "public") {
            router.push(`/admin/platforms/public-platform/${id}`);
        }
    };
    // const { data: dataOrders, isLoading: isLoadingOrders } = useGetOrdersListQuery(token, {
    //     refetchOnMountOrArgChange: true,
    // });

    return (
        <div>
            <div className={styles.groupItem}>
                <Text type="sem16" color="black">
                    {title}
                </Text>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClickIcon}
                    className={styles.workPlatform}
                >
                    <Image src={`/platforms/${stateIcon}.svg`} alt="icon" width={24} height={24} />
                    {stateIcon === "workPlatformActive" && (
                        <ul className={styles.listFunctions}>
                            {(sort === "save" ? dropdownFilterSave : dropdownFilterPublic).map(({ title, value }) => (
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
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Group;
