import React, {FC} from "react";
import Image from "next/image";
import styles from "./styles/TabAccordion.module.css";
import TextField from "@/src/components/shared/textfields/TextField";
import minus from "@/src/components/entities/accordionBlock/pictures/Minus.svg";
import plus from "@/src/components/entities/accordionBlock/pictures/Plus.svg";
export interface ITabAccordion {
     id: number;
     title: string;
     content: string;
}

export interface AccordionProps {
     onClick: () => void;
}

const TabAccordion: FC<ITabAccordion & AccordionProps> = ({id, title, content }) => {
     return (
          <div key={id}>
               <div className={styles.header}>
                    <TextField color={"black"} type={"h5"} >{title}</TextField>
                    <span>{isSelected ? <Image src={minus} alt="Close"/> : <Image src={plus} alt="Open"/>}</span>
               </div>
               <div className={`${styles.content} ${isSelected && styles.show}`}>
                    {content}
               </div>
          </div>
     );


};

export default TabAccordion;