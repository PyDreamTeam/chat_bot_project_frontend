import React, { FC, useState, Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import { dropDownArrow } from "../img/SvgConfig";
import { PLATFORM_FILTERS_GROUPS_ICONS } from "@/src/components/entities/platformsFilters/img/SvgArray";
import IconGroupCard from "./IconGroupCard";

interface IPlatformGroup {
    id?: number;
    image: string | null;
    status: string;
    title: string;
}

export interface SelectGroupIcon {
    dataIcons?: IPlatformGroup[] | undefined;
    selected?: string | undefined;
    selectedId?: number;
    setSelected?: Dispatch<SetStateAction<string>>;
    setSelectedId?: (groupId: number | undefined) => void;
    setImageName: (imageName: string) => void;
}

export const SelectGroupIcon: FC<SelectGroupIcon> = ({
    setImageName,
    dataIcons,
    selected,
    // selectedId,
    setSelected,
    // setSelectedId,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedId, setSelectedId] = useState<number>();
    const handleClick = (id: number, title: string) => {
        console.log(id);
        setSelectedId(id);
        setImageName(title);
    };
    return (
        <div className={styles.dropDown}>
            <Text type="reg18" color="dark">
                Выбор иконки
            </Text>
            <div className={styles.iconCardsContainer}>
                {PLATFORM_FILTERS_GROUPS_ICONS.map((item) => (
                    <IconGroupCard
                        id={item.id}
                        key={item.id}
                        img={item.img}
                        name={item.title}
                        active={item.id === selectedId ? true : false}
                        onClick={() => handleClick(item.id, item.title)}
                    />
                ))}
            </div>
        </div>
    );
};
