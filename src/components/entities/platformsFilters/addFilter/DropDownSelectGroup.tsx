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
    // setSelected: (title: string | undefined) => void;
    setSelected: Dispatch<SetStateAction<string>>;
    setSelectedId: (groupId: number) => void;
    //     onChange?: (event: { currentTarget: { id: number } }) => void;
    //     isChecked?: boolean;
    //     activeDropDownItem?: number | string;
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
                    {dataGroups?.map((group) => (
                        <div
                            key={group.id}
                            // onClick={(e) => {
                            //     console.log(group.title);
                            //     const title = group.title;
                            //     setSelected(title);
                            //     setSelectedId(group.id);
                            //     setIsActive(false);
                            // }}
                            onClick={() => handleClick(group)}
                            className={styles.dropDownItem}
                        >
                            {group.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
