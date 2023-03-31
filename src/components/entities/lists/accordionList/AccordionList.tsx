import React, {FC, useState} from "react";

import styles from "./styles/AccordionList.module.css";

import TabAccordion from "@/src/components/shared/tabs/accordionItem/AccordionItem";

export interface IAccordionList {
     title: string;
     content: string;
}

interface IAccordionProps {
     data: IAccordionList[];
}

const AccordionList: FC<IAccordionProps> = ({data=[]}) => {
     const [selected, setSelected] = useState<number | null>(null);
     return (
          <div className={styles.accordion}>
               {data.length &&
                  data.map((item, index) => (
                       <TabAccordion
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

export default AccordionList;