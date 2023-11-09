import React, { FC, useState } from "react";
import ItemAccordion from "@/src/components/shared/tabs/itemAccordion/ItemAccordion";
import styles from "./styles/AccordionList.module.css";

export interface IAccordionList {
    title: string;
    content: string;
}

interface IAccordionProps {
    data: IAccordionList[];
}

const ListAccordion: FC<IAccordionProps> = ({ data = [] }) => {
    const [openId, setId] = useState<number | null>(null);
    return (
        <>
            <ul className={styles.accordion}>
                {data.length &&
                    data.map((item, index) => (
                        <ItemAccordion
                            id={index}
                            key={index}
                            title={item.title}
                            content={item.content}
                            onClick={() => (index === openId ? setId(null) : setId(index))}
                            isOpen={index === openId}
                        />
                    ))}
            </ul>
        </>
    );
};

export default ListAccordion;
