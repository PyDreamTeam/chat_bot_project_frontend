import React, { FC, useState, Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import { dropDownArrow } from "@/src/components/entities/platformsFilters/img/SvgConfig";

interface IPlatform {
    id: number;
    image: string | null;
    status: string;
    title: string;
}

export interface IDropdownSelectPlatform {
    data?: IPlatform[] | undefined;
    selected?: string | undefined;
    selectedId?: number;
    setSelected: Dispatch<SetStateAction<string>>;
    setSelectedId: (groupId: number) => void;
}

export const DropdownSelectPlatform: FC<IDropdownSelectPlatform> = ({
    data,
    selected,
    selectedId,
    setSelected,
    setSelectedId,
}) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (platform: IPlatform) => {
        setSelected(platform.title);
        setSelectedId(platform.id);
        setIsActive(false);
    };
    return (
        <div className={styles.dropDown}>
            <Text type="reg18" color="dark">
                Платформа на которой реализовано решение
            </Text>
            <div className={styles.dropDownBtn} onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <div className={isActive ? styles.arrowButtonOpen : styles.arrowButton}>{dropDownArrow}</div>
            </div>
            {isActive && (
                <div className={styles.dropDownContent}>
                    {data
                        ?.filter((item) => item.status === "save" || item.status === "public")
                        .map((platform) => (
                            <div
                                key={platform.id}
                                onClick={() => handleClick(platform)}
                                className={styles.dropDownItem}
                            >
                                {platform.title}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};
