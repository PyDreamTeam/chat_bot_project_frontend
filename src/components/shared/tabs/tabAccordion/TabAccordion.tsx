import React, {FC, useState} from "react";

import styles from "./styles/TabAccordijn.module.css";
import TextField from "@/src/components/shared/textfields/TextField";

export interface ITabAccordion {
     id: number;
     title: string;
     content: string;
}

interface AccordionProps {
     data: ITabAccordion[];
}

const TabAccordion: FC<AccordionProps> = ({data}) => {
     const [selected, setSelected] = useState<number | null>(null);

     const toggle = (index: number | null) => {
          if (selected === index) {
               return setSelected(null);
          }
          setSelected(index);
     };

     return (
          <div className={styles.accordion}>
               {data.length &&
                  data.map((item, index) => {
                       const isSelected = selected === index;

                       return (
                            <div key={item.id}>
                                 <div className={styles.header} onClick={() => toggle(index)}>
                                      <TextField color={"black"} type={"h5"} >{item.title}</TextField>
                                      <span>{isSelected ? "-" : "+"}</span>
                                 </div>
                                 <div className={`${styles.content} ${isSelected && styles.show}`}>
                                      {item.content}
                                 </div>
                            </div>
                       );
                  })}
          </div>
     );
};

export default TabAccordion;