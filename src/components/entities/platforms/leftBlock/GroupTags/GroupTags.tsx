import { FC, useEffect, useState } from "react";
import css from "./groupTags.module.css";
import { PropsGroupTags } from "../../types";
import { Checkbox } from "../Checkbox/Checkbox";
import Text from "@/src/components/shared/text/Text";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { addFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";


export const GroupTags: FC<PropsGroupTags> = ({tags = []}) => {

     const dispatch = useAppDispatch();
     const filters = useAppSelector((state) => state.reducerFilters.filters);

     console.log("filters", filters);

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
                         .map((item) => (
                              <li key={item.id} className={css.tag}>
                                   <Checkbox onChange={() => dispatch(addFilters({id: item.id, tag: item.tag}))}/>
                                   <Text type="reg14" color="dark">{item.tag}</Text>
                              </li>
                         ))}
                    {tags.length > 4 && tags.length > 5 &&
                    <div onClick={toggleOpenOptions} className={open ? css.btnOpen : css.btnClose}>
                         <Text type="reg14" color="black">Все {tags.length} вариантов</Text>
                         {open ? <img src="/img/chevron-right.svg" alt="item" /> : <img src="/img/chevron-rightGray.svg" alt="item" />}     
                    </div>}
                    {open &&
                         <div className={css.wrapperList}>
                              <ul className={`${css.list} ${css.listOpen}`}>
                                   {tags.map((item) => (
                                        <li key={item.id} className={css.tag}>
                                             <Checkbox onChange={() => dispatch(deleteFilters(item.id))}/>
                                             <Text type="reg14" color="dark">{item.tag}</Text>
                                        </li>
                                   ))}
                              </ul>
                         </div>}
               </ul>

          </div>
     );
};