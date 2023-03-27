import React, { FC } from "react";
import styles from "./styles/styles.module.css";

export enum BtnVariants {
     cancel = "cancel",
     apply = "apply",
}

interface IButtonRadioInput {
     variant: keyof typeof BtnVariants;
     text: string;
     isDisabled: boolean;
}

const ButtonRadioInput: FC<IButtonRadioInput> = ({ text, isDisabled, variant }) => {
     return (
          <button
               type="submit"
               disabled={isDisabled}
               className={`${variant === "cancel" ? styles.canselRadioInput : styles.applyRadioInput} ${styles.btnForRadio} ${
                    isDisabled ? styles.submitDisabled : null
               }`}
          >
               {text}
          </button>
     );
};

export default ButtonRadioInput;
