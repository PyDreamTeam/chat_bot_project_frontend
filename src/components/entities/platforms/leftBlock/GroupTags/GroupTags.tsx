import { FC, useEffect, useState } from "react";
import css from "./groupTags.module.css";
import { PropsGroupTags } from "../../types";
import { Checkbox } from "../Checkbox/Checkbox";
import Text from "@/src/components/shared/text/Text";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { addFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";


const CheckboxMultipleItem = ({id, tag, isChecked}: {id: number, tag: string, isChecked: boolean}) => {
     const dispatch = useAppDispatch();

     const handleCheckboxClick = ({id, tag}: {id: number, tag: string}) => {
          if (!isChecked) {
               dispatch(addFilters({id: id, tag: tag}));
          } else {
               dispatch(deleteFilters(id));
          }
     };

     return ( <li key={id} className={css.tag}>
          <Checkbox onChange={() => handleCheckboxClick(({id, tag}))} checked={isChecked}/>
          <Text type="reg14" color="dark">{tag}</Text>
     </li>);
};

const CheckboxSingleItem = ({id, tag, isChecked, setChecked}: {id: number, tag: string, isChecked: boolean, setChecked: (id: number, tag: string) => void}) => {

     return ( <li key={id} className={css.tag}>
          <Checkbox onChange={() => setChecked(id, tag)} checked={isChecked}/>
          <Text type="reg14" color="dark">{tag}</Text>
     </li>);
};

export const GroupTags: FC<PropsGroupTags> = ({tags = []}) => {
     const dispatch = useAppDispatch();

     const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

     const handleSigngleCheckbox = (id: number, tag: string) => {
          if (selectedFilter !== id) {
               if (selectedFilter) {
                    dispatch(deleteFilters(selectedFilter));
               }
               dispatch(addFilters({id: id, tag: tag}));
               setSelectedFilter(id);
          }
     };


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
                              <CheckboxSingleItem id={id} tag={tag} key={id} isChecked={Boolean(filters.find(item => item.id === id))} setChecked={handleSigngleCheckbox}/>
                              // <CheckboxMultipleItem id={id} tag={tag} key={id} isChecked={Boolean(filters.find(item => item.id === id))}/>
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
                                        <CheckboxSingleItem id={id} tag={tag} key={id} isChecked={Boolean(filters.find(item => item.id === id))} setChecked={handleSigngleCheckbox}/>

                                        // <CheckboxMultipleItem id={id} tag={tag} key={id} isChecked={Boolean(filters.find(item => item.id === id))}/>
                                   ))}
                              </ul>
                         </div>}
               </ul>

          </div>
     );
};

