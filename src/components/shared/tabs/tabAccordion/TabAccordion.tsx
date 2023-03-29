import React, {FC} from "react";
import Image from "next/image";
import minus from "@/src/components/entities/accordionBlock/pictures/Minus.svg";
import plus from "@/src/components/entities/accordionBlock/pictures/Plus.svg";

import styles from "./styles/TabAccordion.module.css";

export interface ITabAccordion {
    id: number;
    title: string;
    content: string;
}

export interface AccordionProps {
    isSelected: boolean;
    setSelected: (id: null | number) => void;
}

const TabAccordion: FC<ITabAccordion & AccordionProps> = ({id, title, content, isSelected, setSelected}) => {
     return (
          <div key={id} className={`${styles.wrapper} ${isSelected && styles.active}`}>
               <div className={`${styles.header} ${isSelected && styles.open}`} onClick={() => setSelected(isSelected ? null : id)}>
                    {title}
                    {isSelected ? <Image src={minus} alt="Close"/> : <Image src={plus} alt="Open"/>}
               </div>
               <div className={`${styles.content} ${isSelected && styles.show}`}>
                    {content}
               </div>
          </div>
     );
};

export default TabAccordion;