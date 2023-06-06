import Text from "@/src/components/shared/text/Text";
import { useState } from "react";
import Option from "../OptionFilter/OptionFilter";
import style from "./AlphabeticalSorting.module.css";

const alpSorting = [
     { name: "названию от А до Я", checked: false },
     { name: "названию от Я до А", checked: false }
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
                    <Text type="reg14" color="black">Сортировать по</Text>
                    {isOpen ? <img src="/img/chevron-up.svg" /> : <img src="/img/chevron-down.svg" />}

               </div>
               <div className={style.wrapperOptions}>
                    {isOpen &&
                         <div className={style.groupSorting}>
                              {items.map((item) => (
                                   <li key={item.name}>
                                        <Option name={item.name} checked={item.checked} onChange={() => changeFilter(item.name)} />
                                   </li>
                              ))}
                         </div>}
               </div>
          </div>
     );
};

export default AlphabeticalSorting;