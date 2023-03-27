import React, { FC, useState } from "react";

import styles from "./styles/tabSelect.module.css";
import DropDownSelect from "@/src/components/entities/dropDownSelect/DropDownSelect";
import { DROPDOWN_SELECT_CONFIG } from "@/src/components/entities/dropDownSelect/DropDownSelectConfig";

export interface ITabSelect {
     id?: number;
     title?: string;
     icon?: React.ReactNode;
}

export interface TabSelectProps {
     activeTabSelect?: number;
     onClick?: void;
}

const TabSelect: FC<ITabSelect & TabSelectProps> = ({ id, title = "", icon, onClick, activeTabSelect }) => {
     const [toggle, setToggle] = useState(false);
     const handleOpenClose = () => setToggle(!toggle);

     const [selectedInput, setSelectedInput] = useState("");

     const handleChange = (inputValue: React.SetStateAction<string>) => {
          setSelectedInput(inputValue);
     };

     const handleRadioChange = (event: { currentTarget: { id: any } }) => {
          const { id } = event.currentTarget;
          handleChange(id);
     };
     return (
          <div className={styles.blockSelect}>
               <div onClick={handleOpenClose} className={`${styles.selectTitle} ${activeTabSelect === id ? styles.active : null}`}>
                    {title}
                    {icon}
               </div>
               <div className={styles.radioButton}>
                    {toggle && (
                         <DropDownSelect config={DROPDOWN_SELECT_CONFIG} key={id} onChange={handleRadioChange} isChecked={selectedInput} />
                    )}
               </div>
          </div>
     );
};

export default TabSelect;
