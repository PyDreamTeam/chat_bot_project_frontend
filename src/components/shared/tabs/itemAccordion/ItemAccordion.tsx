import React, { FC, useState, useRef, useEffect } from "react";
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
    isSelected?: boolean;
    onClick?: (id?: null | number) => void;
    isOpen?: boolean;
}

const ItemAccordion: FC<IAccordionItem & IAccordionItemProps> = ({ id, title, content, isOpen, onClick }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <li className={isOpen ? styles.active : styles.accordion_item}>
                <div className={styles.accordion_header} onClick={() => onClick?.()}>
                    <Text type={"reg18"} color={"dark"}>
                        {title}
                    </Text>
                    {isOpen ? <Image src={minus} alt="Close" /> : <Image src={plus} alt="Open" />}
                </div>
                <div
                    className={styles.accordion_collapse}
                    style={isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }}
                >
                    <div className={styles.accordion_body} ref={itemRef}>
                        <Text type={"reg14"} color={"grey"}>
                            {content}
                        </Text>
                    </div>
                </div>
            </li>
        </>
    );
};

export default ItemAccordion;
