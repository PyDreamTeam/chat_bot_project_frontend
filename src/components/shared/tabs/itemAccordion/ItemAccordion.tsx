import React, { FC } from "react";
import Image from "next/image";
import minus from "/public/img/minus.svg";
import plus from "/public/img/plus.svg";

import styles from "./styles/AccordionItem.module.css";
import Text from "@/src/components/shared/text/Text";

export interface IAccordionItem {
    id: number;
    title: string;
    content: string;
}

export interface IAccordionItemProps {
    isSelected: boolean;
    setSelected: (id: null | number) => void;
}

const ItemAccordion: FC<IAccordionItem & IAccordionItemProps> = ({ id, title, content, isSelected, setSelected }) => {
    const openClick = () => setSelected(isSelected ? null : id);
    return (
        <div key={id} className={`${styles.wrapper} ${isSelected && styles.active}`}>
            <div className={`${styles.header} ${isSelected && styles.open}`} onClick={openClick}>
                <Text type={"reg18"} color={"dark"}>
                    {title}
                </Text>
                {isSelected ? <Image src={minus} alt="Close" /> : <Image src={plus} alt="Open" />}
            </div>
            <div className={`${styles.content} ${isSelected && styles.show}`}>
                <Text type={"reg14"} color={"grey"}>
                    {content}
                </Text>
            </div>
        </div>
    );
};

export default ItemAccordion;
