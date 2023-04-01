import React, {FC} from "react";
import Image from "next/image";
import minus from "@/src/components/entities/accordionBlock/img/Minus.svg";
import plus from "@/src/components/entities/accordionBlock/img/Plus.svg";

import styles from "./styles/AccordionItem.module.css";

export interface IAccordionItem {
    id: number;
    title: string;
    content: string;
}

export interface IAccordionItemProps {
    isSelected: boolean;
    setSelected: (id: null | number) => void;
}

const AccordionItem: FC<IAccordionItem & IAccordionItemProps> = ({id, title, content, isSelected, setSelected}) => {
     const openClick = () => setSelected(isSelected ? null : id);
     return (
          <div key={id} className={`${styles.wrapper} ${isSelected && styles.active}`}>
               <div className={`${styles.header} ${isSelected && styles.open}`} onClick={openClick}>
                    {title}
                    {isSelected ? <Image src={minus} alt="Close"/> : <Image src={plus} alt="Open"/>}
               </div>
               <div className={`${styles.content} ${isSelected && styles.show}`}>
                    {content}
               </div>
          </div>
     );
};

export default AccordionItem;