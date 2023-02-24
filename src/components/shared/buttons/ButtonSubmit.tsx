import React from "react";
import styles from "./styles/styles.module.css";

const ButtonSubmit = ({ text, isDisabled }: any) => {
     return (
          <button disabled={isDisabled} className={`${styles.submit} ${isDisabled ? styles.submitDisabled : null}`}>
               {text}
          </button>
     );
};

export default ButtonSubmit;
