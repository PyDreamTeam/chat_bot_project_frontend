import Text from "@/src/components/shared/text/Text";
import { useState } from "react";
import style from "./alphabeticalSorting.module.css";
import { Checkbox } from "../../leftBlock/Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { addFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";

const alpSorting = [
     { id: Math.random(), tag: "A до Z (А до Я)", },
     { id: Math.random(), tag: "Z до А (Я до А)", }
];

export const AlphabeticalSorting = () => {

     const dispatch = useAppDispatch();
     const filters = useAppSelector((state) => state.reducerFilters.filters);
     const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

     const handleSingleCheckbox = (id: number, tag: string, filter?: string) => {
          if (selectedFilter) {
               dispatch(deleteFilters(selectedFilter));
          }
          dispatch(addFilters({id: id, tag: tag, filter: ""}));
          setSelectedFilter(id);
          setIsOpen(false);
     };

     const [items, setItems] = useState(alpSorting);

     const [isOpen, setIsOpen] = useState(false);
     const toggleBtn = () => {
          setIsOpen(!isOpen);
     };

     return (
          <div className={style.wrapper}>
               <div onClick={toggleBtn} className={style.sorting}>
                    {filters.find(item => item.tag === "A до Z (А до Я)") ?
                    <Text type="reg14" color="black">A до Z (А до Я)</Text> :
                    filters.find(item => item.tag === "Z до А (Я до А)") ?
                    <Text type="reg14" color="black">Z до А (Я до А)</Text> :
                    <Text type="reg14" color="black">Сортировать от</Text>
                    }
                    {isOpen ? <img src="/img/chevron-up.svg" /> : <img src="/img/chevron-down.svg" />}

               </div>
               <div className={style.wrapperOptions}>
                    {isOpen &&
                         <ul className={style.groupSorting}>
                              {items.map(({id, tag}) => (
                                   <li key={id} className={style.sort}>
                                        <Checkbox checked={Boolean(filters.find(item => item.id === id))} onChange={() => handleSingleCheckbox(id, tag)} />
                                        <Text type="reg14" color="black">{tag}</Text>
                                   </li>
                              ))}
                         </ul>}
               </div>
          </div>
     );
};

export default AlphabeticalSorting;