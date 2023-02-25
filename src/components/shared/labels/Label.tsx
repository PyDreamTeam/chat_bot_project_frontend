import React, { FC, ReactNode } from "react";
import styles from "./styles/styles.module.css";

export enum LabelTypes {
     checkbox = "checkbox",
     inputField = "inputField",
}

export interface LabelProps {
     htmlFor: string;
     text?: string;
     typeLabel: LabelTypes.checkbox | LabelTypes.inputField;
     children?: ReactNode;
}

const Label = ({ htmlFor, text, typeLabel, children }: LabelProps) => {
     return (
          <label className={`${styles.label} ${typeLabel}`} htmlFor={htmlFor}>
               <p>{text}</p>
               {children}
          </label>
     );
};

export default Label;
