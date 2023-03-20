import React from "react";
import styles from "./styles/styles.module.css";

interface ButtonSubmitProps {
     text: string;
     isDisabled: boolean;
}

const ButtonSubmit = ({ text, isDisabled }: ButtonSubmitProps) => {
     return (
          <button type="submit" disabled={isDisabled} className={`${styles.submit} ${isDisabled ? styles.submitDisabled : null}`}>
               {text}
          </button>
     );
};

export default ButtonSubmit;
