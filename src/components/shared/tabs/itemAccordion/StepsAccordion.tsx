import React, { FC } from "react";
import Image from "next/image";
import styles from "./styles/StepsAccordion.module.css";
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

const StepsAccordion: FC<IAccordionItem & IAccordionItemProps> = ({ id, title, content, isSelected, setSelected }) => {
    const openClick = () => setSelected(isSelected ? null : id);
    return (
        <div key={id} className={`${styles.wrapper} ${isSelected && styles.active}`}>
            <div className={styles.openTitle}>
                <Text type={"med20"} color={"dark"}>
                    {title}
                </Text>
                <div className={`${styles.content} ${isSelected && styles.show}`}>
                    <Text type={"reg16"} color={"grey"}>
                        {content}
                    </Text>
                </div>
            </div>
            <div className={`${styles.header} ${isSelected && styles.open}`} onClick={openClick}>
                {isSelected ? (
                    <Image src={"img/StepClose.png"} alt="Close" width={70} height={70} />
                ) : (
                    <Image src={"img/StepOpen.png"} alt="Open" width={70} height={70} />
                )}
            </div>
        </div>
    );
};

export default StepsAccordion;
