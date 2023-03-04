import React, {FC} from "react";

import styles from "./styles/RadioInput.module.css";

export interface IRadioInput {
    name: string;
    label: string;
    value: string,
    isChecked?: boolean | undefined,
    type?: string,
}

const RadioInput: FC<IRadioInput> = (
     { 
          name, 
          label, 
          value, 
          isChecked,
     }) => {

     return (
          <div>
               <input
                    type="radio"
                    id={value}
                    className={styles.customRadio}
                    name={name}
                    checked={isChecked}
               />
               <label htmlFor={value}>
                    <span>{label}</span>
               </label>
          </div>
     );
};

export default RadioInput;