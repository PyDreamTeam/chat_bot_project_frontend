import { FC, useEffect, useState } from "react";
import css from "./groupTagsMultiple.module.css";
import { PropsGroupTags } from "../../types";
import { Checkbox } from "../Checkbox/Checkbox";
import Text from "@/src/components/shared/text/Text";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { addFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";
import { CheckboxMultipleItem } from "../CheckboxMultipleItem/CheckboxMultipleItem";

export const GroupTagsMultiple: FC<PropsGroupTags> = ({tags = [], filter}) => {

     const filters = useAppSelector((state) => state.reducerFilters.filters);
     
     const [lengthArray, setLengthArray] = useState<number>(4);
     const changeLengthArray = () => {
          if (tags.length === 5) {
               setLengthArray(5);
          }
     };
     const [open, setOpen] = useState<boolean>(false);
     const toggleOpenOptions = () => {
          setOpen(!open);
     };

     useEffect(() => {
          changeLengthArray();
     }, []);

     return (
          <div>
               <ul className={css.listTag}>
                    {tags
                         .slice(0, lengthArray)
                         .map(({id, tag}) => (
                              <CheckboxMultipleItem filter={filter} id={id} tag={tag} key={id} isChecked={Boolean(filters.find(item => item.id === id))}/>
                         ))}
                    {tags.length > 4 && tags.length > 5 &&
                    <div onClick={toggleOpenOptions} className={open ? css.btnOpen : css.btnClose}>
                         <Text type="reg14" color="black">Все {tags.length} вариантов</Text>
                         {open ? <img src="/img/chevron-right.svg" alt="item" /> : <img src="/img/chevron-rightGray.svg" alt="item" />}     
                    </div>}
                    {open &&
                         <div className={css.wrapperList}>
                              <ul className={`${css.list} ${css.listOpen}`}>
                                   {tags.map(({id, tag}) => (
                                        <CheckboxMultipleItem filter={filter} id={id} tag={tag} key={id} isChecked={Boolean(filters.find(item => item.id === id))}/>
                                   ))}
                              </ul>
                         </div>}
               </ul>

          </div>
     );
};