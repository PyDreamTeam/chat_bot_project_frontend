import { FC, useState } from "react";
import css from "./filters.module.css";
import { PropsFilters } from "../../types";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { GroupTagsSingle } from "../GroupTagsSingle/GroupTagsSingle";
import { GroupTagsMultiple } from "../GroupTagsMultiple/GroupTagsMultiple";
import { InputPrice } from "../InputPrice/InputPrice";
import { useAppSelector } from "@/src/hooks/types";

export const Filters: FC<PropsFilters> = ({filters = []}) => {

     const [openItems, setOpenItems] = useState<boolean[]>(filters.map(() => false));
   
     const toggleItem = (id: number) => {
          setOpenItems(prevState => {
               const newState = [...prevState];
               newState[id] = !newState[id];
               return newState;
          });
     };

     return (
          <div>
               <ul className={css.listTags}>
                    {filters.map((item) => (
                         <li key={item.id}>
                              {item.filter !== "" && 
                              <div className={css.filter}>
                                   <Image src={`/platforms/${item.image}.svg`} width={24} height={24} alt="icon"/>
                                   <Text type="reg20" color="dark">{item.filter}</Text>

                                   <div className={css.blockInfo} onClick={() => toggleItem(item.id)}>
                                        {openItems[item.id] ? <img src="/img/clarity_help-lineActive.svg" alt="item" /> : <img src="/img/clarity_help-line.svg" alt="item" />}
                                        {openItems[item.id] &&
                              <div className={css.groupInfo}>
                                   <div className={css.info}>
                                        <Text type="sem16" color="black">{item.filter} <span className={css.infoText}>- {item.functionality}</span></Text>
                                   </div>
                              </div>
                                        }

                                   </div>
                              </div>
                              }
                              {item.filter === "Стоимость" && 
                              <div>
                                   <div className={css.price}>
                                        <InputPrice placeholder="0 RUB"/>
                                        <span className={css.line}></span>
                                        <InputPrice placeholder="600 RUB"/>     
                                   </div>
                              </div>}
                              {item.multiple ? <GroupTagsMultiple filter={item.filter} tags={item.tags}/> : <GroupTagsSingle filter={item.filter} tags={item.tags}/>}
                              
                         </li>
                    ))}
               </ul>
          </div>
     );
};