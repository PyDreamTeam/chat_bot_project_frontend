import React, { FC } from "react";
import Image from "next/image";
import minus from "@/src/components/entities/TemplatesPageComponents/accordionBlock/img/Minus.svg";
import plus from "@/src/components/entities/TemplatesPageComponents/accordionBlock/img/Plus.svg";

import styles from "./styles/AccordionItem.module.css";
import Text from "@/src/components/shared/textfields/Text";

export interface IAccordionItem {
     id: number;
     title: string;
     content: string;
}

export interface IAccordionItemProps {
     isSelected: boolean;
     setSelected: (id: null | number) => void;
}

const AccordionItem: FC<IAccordionItem & IAccordionItemProps> = ({ id, title, content, isSelected, setSelected }) => {
     const openClick = () => setSelected(isSelected ? null : id);
     return (
          <div key={id} className={`${styles.wrapper} ${isSelected && styles.active}`}>
               <div className={`${styles.header} ${isSelected && styles.open}`} onClick={openClick}>
                    <Text type={"reg24"} color={"black"}>
                         {title}
                         {isSelected ? <Image src={minus} alt="Close" /> : <Image src={plus} alt="Open" />}
                    </Text>
               </div>
               <div className={`${styles.content} ${isSelected && styles.show}`}>
                    <Text type={"reg18"} color={"black"}>
                         {content}
                    </Text>
               </div>
          </div>
     );
};

export default AccordionItem;