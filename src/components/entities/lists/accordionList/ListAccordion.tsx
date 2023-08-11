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
     const [selected, setSelected] = useState<number | null>(null);
     return (
          <div className={styles.wrapper}>
               {data.length &&
              data.map((item, index) => (
                   <ItemAccordion
                        id={index}
                        key={index}
                        title={item.title}
                        content={item.content}
                        setSelected={setSelected}
                        isSelected={selected === index}
                   />
              ))}
          </div>
     );
};

export default ListAccordion;