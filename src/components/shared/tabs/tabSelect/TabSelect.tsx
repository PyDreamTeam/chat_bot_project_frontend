import React, { FC, useState } from "react";

import styles from "./styles/tabSelect.module.css";
import DropDownSelect from "@/src/components/entities/dropDownSelect/DropDownSelect";
import { DROPDOWN_SELECT_CONFIG } from "@/src/components/entities/dropDownSelect/DropDownSelectConfig";
import Text from "@/src/components/shared/text/Text";

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

     const [selectedInput, setSelectedInput] = useState<any>(false);

     const handleChange = (inputValue: any) => {
          setSelectedInput(inputValue);
     };

     const handleRadioChange = (event: any) => {
          const { id } = event.currentTarget;
          handleChange(id);
     };
     return (
          <div className={styles.blockSelect}>
               <div onClick={handleOpenClose} className={`${styles.selectTitle} ${activeTabSelect === id ? styles.active : null}`}>
                    <Text type={"reg18"} color={"black"}>
                         {title}
                    </Text>
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