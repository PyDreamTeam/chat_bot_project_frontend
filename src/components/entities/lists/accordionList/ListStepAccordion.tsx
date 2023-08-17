import React, { FC, useState } from "react";
import StepsAccordion from "@/src/components/shared/tabs/itemAccordion/StepsAccordion";
import styles from "./styles/AccordionList.module.css";

export interface IAccordionList {
     title: string;
     content: string;
}

interface IAccordionProps {
     data: IAccordionList[];
}

const ListStepAccordion: FC<IAccordionProps> = ({ data = [] }) => {
     const [selected, setSelected] = useState<number | null>(null);
     return (
          <div className={styles.stepAccordionBlock}>
               {data.length &&
              data.map((item, index) => (
                   <StepsAccordion
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

export default ListStepAccordion;