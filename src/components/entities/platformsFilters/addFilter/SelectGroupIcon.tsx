import React, { FC, useState, Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
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
    defaultImage?: string | undefined;
    selectedId?: number;
    setSelectedImage?: (imageName: string) => void;
    setSelectedId?: (groupId: number | undefined) => void;
    setImageName: (imageName: string) => void;
}

export const SelectGroupIcon: FC<SelectGroupIcon> = ({
    setImageName,
    dataIcons,
    defaultImage,
    // selectedId,
    // setSelectedImage,
    // setSelectedId,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | undefined>(defaultImage);
    const [selectedId, setSelectedId] = useState<number>();
    const handleClick = (id: number, title: string) => {
        setSelectedId(id);
        setSelectedImage(title);
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
                        active={item.id === selectedId || item.title === selectedImage ? true : false}
                        onClick={() => handleClick(item.id, item.title)}
                    />
                ))}
            </div>
        </div>
    );
};
