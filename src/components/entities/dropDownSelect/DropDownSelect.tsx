import React, { FC } from "react";

import styles from "./styles/DropDownSelect.module.css";
import DropDownItem, { DropDownItemProps, IDropDownItem } from "@/src/components/shared/dropDownItem/DropDownItem";

import ButtonRadioInput, { BtnVariants } from "@/src/components/shared/buttons/ButtonRadioInput";

export interface IDropDownSelect {
     config?: IDropDownItem[] | undefined;
     onChange?: any;
     isChecked?: any;
}

const DropDownSelect: FC<IDropDownSelect & DropDownItemProps> = ({ config = [] }, activeDropDownItem) => {
     return (
          <div className={styles.dropDown}>
               {config.map((item) => (
                    <DropDownItem id={item.id} type={item.type} key={item.id} activeDropDownItem={activeDropDownItem} />
               ))}
               <div className={styles.btn}>
                    <ButtonRadioInput text={"Отменить"} isDisabled={true} variant={BtnVariants.cancel} />
                    <ButtonRadioInput text={"Применить"} isDisabled={true} variant={BtnVariants.apply} />
               </div>
          </div>
     );
};

export default DropDownSelect;