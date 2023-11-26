import React, { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import styles from "./styles/StepsAccordion.module.css";
import Text from "@/src/components/shared/text/Text";
import Title from "../../text/Title";

export interface IAccordionItem {
    id: number;
    title: string;
    text: string;
}

export interface IAccordionItemProps {
    openItems: boolean[];
    toggleItem: (id: number) => void;
}

const StepsAccordion: FC<IAccordionItem & IAccordionItemProps> = ({ id, title, text, toggleItem, openItems }) => {
    return (
        <li key={id} className={`${styles.wrap} ${openItems[id] && styles.active}`}>
            <div onClick={() => toggleItem(id)} className={styles.title}>
                <Title type="h5" color="dark">
                    {title}
                </Title>
                {openItems[id] ? (
                    <Image src={"/img/StepClose.png"} alt="chevron" width={70} height={70} />
                ) : (
                    <Image src={"/img/StepOpen.png"} alt="chevron" width={70} height={70} />
                )}
            </div>
            <div className={`${styles.content} ${openItems[id] && styles.show}`}>
                <Text type={"reg16"} color={"grey"}>
                    {text}
                </Text>
            </div>
        </li>
    );
};

export default StepsAccordion;
