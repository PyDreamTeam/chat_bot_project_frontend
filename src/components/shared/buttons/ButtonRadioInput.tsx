import React from "react";
import styles from "./styles/styles.module.css";

export enum BtnVariants {
     cansel = "cansel",
     apply = "apply",
}

interface ButtonRadioInputProps {
     variant: keyof typeof BtnVariants;
     text: string;
     isDisabled: boolean;
}

const ButtonRadioInput = ({ text, isDisabled, variant }: ButtonRadioInputProps) => {
     return (
          <button
               type="submit"
               disabled={isDisabled}
               className={`${
                    variant === "cansel" ? styles.canselRadioInput : variant === "apply" ? styles.applyRadioInput : styles.default
               } ${styles.btnForRadio} ${isDisabled ? styles.submitDisabled : null}`}
          >
               {text}
          </button>
     );
};

export default ButtonRadioInput;