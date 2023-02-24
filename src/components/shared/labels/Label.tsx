import React from "react";
import styles from "./styles/styles.module.css";

export enum LabelTypes {
     checkbox = "checkbox",
     inputField = "inputField",
}

interface LabelProps {
     htmlFor: string;
     text: string;
     type: LabelTypes.checkbox | LabelTypes.inputField;
}

const Label = ({ htmlFor, text, type }: LabelProps) => {
     return (
          <label className={`${styles.label} ${type}`} htmlFor={htmlFor}>
               {text}
          </label>
     );
};

export default Label;
