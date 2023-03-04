import React, { FC, useState } from "react";

import styles from "./styles/selectInAccount.module.css";

import DropDownSelect from "@/src/components/entities/dropDownSelect/DropDownSelect";
import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import {SELECT_TITLE_CONFIG} from "@/src/components/entities/selectTitle/SelectTitleConfig";
import {DROPDOWN_SELECT_CONFIG} from "@/src/components/entities/dropDownSelect/DropDownSelectConfig";
import {IDropDownItem} from "@/src/components/shared/dropDownItem/DropDownItem";


const SelectInAccount: FC<IDropDownItem> = ({id}) => {

     const [isOpen, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);

     const [selectedInput, setSelectedInput] = useState("");

     const handleChange = (inputValue: React.SetStateAction<string>) => {
          setSelectedInput(inputValue);
     };

     const handleRadioChange = (event: { currentTarget: { id: any; }; }) => {
          const { id } = event.currentTarget;
          handleChange(id);
     };

     return (
          <>
               <div className={styles.select}>
                    <SelectTitle config={SELECT_TITLE_CONFIG} onClick={handleOpen} /> 
               </div>
               
               {
                    isOpen && (
                         <div  className={styles.radioButton}>
                              <DropDownSelect
                                   config={DROPDOWN_SELECT_CONFIG}
                                   key={id}
                                   onChange={handleRadioChange}
                                   isChecked={selectedInput}

                              />
                         </div>
                    )
               }
          </>
     );
};

export default SelectInAccount;