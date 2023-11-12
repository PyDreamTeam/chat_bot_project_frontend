import React, { FC, useState } from "react";
import styles from "./style.module.css";

export interface IconGroupCard {
    id?: number;
    img: React.ReactNode;
    name: string;
    active: boolean;
    onClick: () => void;
}

const IconGroupCard: FC<IconGroupCard> = ({ id, img, name, active, onClick }) => {
    return (
        <div className={active ? styles.iconCardActive : styles.iconCard} onClick={onClick}>
            {img}
        </div>
    );
};

export default IconGroupCard;
