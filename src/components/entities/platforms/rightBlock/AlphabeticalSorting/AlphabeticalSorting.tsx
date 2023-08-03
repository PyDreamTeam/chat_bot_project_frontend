import Text from "@/src/components/shared/text/Text";
import { useState } from "react";
import style from "./alphabeticalSorting.module.css";
import { Checkbox } from "../../leftBlock/Checkbox/Checkbox";

const alpSorting = [
     { name: "A до Z (А до Я)", checked: false },
     { name: " Z до А (Я до А)", checked: false }
];

export const AlphabeticalSorting = () => {

     const [items, setItems] = useState(alpSorting);

     const changeFilter = (name: string) => {
          setItems((prevState) => prevState.map((item) => item.name === name ? { ...item, checked: !item.checked } : item));
     };

     const [isOpen, setIsOpen] = useState(false);
     const toggleBtn = () => {
          setIsOpen(!isOpen);
     };

     return (
          <div className={style.wrapper}>
               <div onClick={toggleBtn} className={style.sorting}>
                    <Text type="reg14" color="black">Сортировать от</Text>
                    {isOpen ? <img src="/img/chevron-up.svg" /> : <img src="/img/chevron-down.svg" />}

               </div>
               <div className={style.wrapperOptions}>
                    {isOpen &&
                         <ul className={style.groupSorting}>
                              {items.map((item) => (
                                   <li key={item.name} className={style.sort}>
                                        <Checkbox checked={item.checked} onChange={() => changeFilter(item.name)} />
                                        <Text type="reg14" color="black">{item.name}</Text>
                                   </li>
                              ))}
                         </ul>}
               </div>
          </div>
     );
};

export default AlphabeticalSorting;