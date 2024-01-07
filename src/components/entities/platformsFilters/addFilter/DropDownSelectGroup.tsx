import React, { FC, useState, Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import { dropDownArrow } from "../img/SvgConfig";

interface IPlatformGroup {
    id: number;
    image: string | null;
    status: string;
    title: string;
}

export interface IDropDownSelectGroup {
    dataGroups?: IPlatformGroup[] | undefined;
    selected?: string | undefined;
    selectedId?: number;
    setSelected: Dispatch<SetStateAction<string>>;
    setSelectedId: (groupId: number) => void;
}

export const DropDownSelectGroup: FC<IDropDownSelectGroup> = ({
    dataGroups,
    selected,
    selectedId,
    setSelected,
    setSelectedId,
}) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (group: IPlatformGroup) => {
        setSelected(group.title);
        setSelectedId(group.id);
        setIsActive(false);
    };
    return (
        <div className={styles.dropDown}>
            <Text type="reg18" color="dark">
                Группы фильтров
            </Text>
            <div className={styles.dropDownBtn} onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <div className={isActive ? styles.arrowButtonOpen : styles.arrowButton}>{dropDownArrow}</div>
            </div>
            {isActive && (
                <div className={styles.dropDownContent}>
                    {dataGroups
                        ?.filter((item) => item.status === "save" || item.status === "public")
                        .map((group) => (
                            <div key={group.id} onClick={() => handleClick(group)} className={styles.dropDownItem}>
                                {group.title}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};
