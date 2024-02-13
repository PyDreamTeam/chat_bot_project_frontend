import React, { FC, useState } from "react";
import StepsAccordion from "@/src/components/shared/tabs/itemAccordion/StepsAccordion";
import styles from "./styles/AccordionList.module.css";

export interface IAccordionList {
    title: string;
    text: string;
}

interface IAccordionProps {
    data: IAccordionList[] | undefined;
}

const ListStepAccordion: FC<IAccordionProps> = ({ data = [] }) => {
    const [openItems, setOpenItems] = useState<boolean[]>(data.map(() => false));

    const toggleItem = (id: number) => {
        setOpenItems((prevState) => {
            const newState = [...prevState];
            newState[id] = !newState[id];
            return newState;
        });
    };

    return (
        <ul className={styles.wrapper}>
            {data.length &&
                data.map((item, index) => (
                    <StepsAccordion
                        id={index}
                        key={index}
                        title={item.title}
                        text={item.text}
                        toggleItem={toggleItem}
                        openItems={openItems}
                    />
                ))}
        </ul>
    );
};

export default ListStepAccordion;
