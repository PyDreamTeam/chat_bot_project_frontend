import React, {FC, useState} from "react";

import styles from "./styles/TabAccordijn.module.css";

import TabAccordion from "@/src/components/shared/tabs/tabAccordion/TabAccordion";

export interface ITabAccordion {
     id: number;
     title: string;
     content: string;
}

interface AccordionProps {
     data: ITabAccordion[];
}

const ListWithAccordion: FC<AccordionProps> = ({data=[]}) => {
     const [selected, setSelected] = useState<number | null>(null);

     return (
          <div className={styles.accordion}>
               {data.length &&
                  data.map((item, index) => (
                       // const isSelected = selected === index;
                       <TabAccordion  
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            setSelected={setSelected}
                            isSelected={selected === index}
                       />

                  ))}
          </div>
     );
};

export default ListWithAccordion;