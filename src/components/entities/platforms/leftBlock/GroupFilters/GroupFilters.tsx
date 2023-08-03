import { FC, useState } from "react";
import css from "./groupFilters.module.css";
import { PropsGroupFilters } from "../../types";
import Title from "@/src/components/shared/text/Title";
import { Filters } from "../Filters/Filters";
import Image from "next/image";

export const GroupFilters: FC<PropsGroupFilters> = ({ results = [] }) => {
     const [openItems, setOpenItems] = useState<boolean[]>(results.map(() => false));
   
     const toggleItem = (id: number) => {
          setOpenItems(prevState => {
               const newState = [...prevState];
               newState[id] = !newState[id];
               return newState;
          });
     };
   
     return (
          <div>
               <ul className={css.listFilters}>
                    {results.map((item) => (
                         <li key={item.id} className={css.filter}>
                              <div onClick={() => toggleItem(item.id)} className={css.title}>
                                   <Title type="h5" color="dark">{item.group}</Title>
                                   {openItems[item.id] ? <Image src={"/img/chevron-up.svg"} alt="chevron" width={24} height={24}/> : <Image src={"/img/chevron-down.svg"} alt="chevron" width={24} height={24}/>}
                              </div>
                              <div className={openItems[item.id] ? css.open : css.close}>
                                   <Filters filters={item.filters} />
                              </div>
                         </li>
                    ))}
               </ul>
          </div>
     );
};