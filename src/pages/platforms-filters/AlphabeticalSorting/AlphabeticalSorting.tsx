import React, { useState } from "react";
import Text from "@/src/components/shared/text/Text";
import { Option } from "../OptionFilter/OptionFilter";
import style from "./alphabeticalSorting.module.css";

const alpSorting = [
     {    name: "названию от А до Я", checked:false},
     {    name: "названию от Я до А", checked:false}
];

export const AlphabeticalSorting = () => {

     const [items, setItems] = useState(alpSorting);

     const changeFilter = (name: string) => {
          setItems((prevState) => prevState.map((item) => item.name === name ? {...item, checked: !item.checked} : item));
     };

     const [isOpen, setIsOpen] = useState(false);
     const toggleBtn = () => {
          setIsOpen(!isOpen);
     };

     return (
          <div style={{display: "flex", justifyContent: "end"}}>
               <div onClick={toggleBtn} className={style.sorting}>
                    <Text type="reg14" color="black">Сортировать по</Text>
                    {isOpen ? <img src="/img/chevron-up.svg"/> : <img src="/img/chevron-down.svg"/>}
               
               </div>

               <div style={{position: "relative"}}>
                    {isOpen && 
                    <div className={style.groupSoting}>
                         {items.map((item) => (
                              <li key={item.name}>
                                   <Option name={item.name} checked={item.checked} onChange={() => changeFilter(item.name)}/>
                              </li>
                         ))}
                         
                    </div>}
               </div>
          </div>
          
     );
};