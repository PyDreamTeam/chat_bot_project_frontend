import React from "react";
import styles from "./styles/styles.module.css";

export enum BtnVariants {
    submit = "submit",
    apply = "apply",
}

interface ButtonRadioInputProps {
    variant?: BtnVariants;
    text: string;
    isDisabled: boolean;
}

const ButtonRadioInput = ({ text, isDisabled, variant }: ButtonRadioInputProps) => {
     return (
          <button 
               type="submit" 
               disabled={isDisabled}
               className={`${
                   variant === BtnVariants.submit ? styles.submitRadioInput :
                       variant === BtnVariants.apply ? styles.applyRadioInput : styles.default
               } ${styles.btnForRadio} ${isDisabled ? styles.submitDisabled : null}`}>
               {text}
          </button>
     );
};

export default ButtonRadioInput;