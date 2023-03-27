import React, { FC, ReactNode } from "react";
import styles from "./styles/styles.module.css";

export enum LabelTypes {
     checkbox = "checkbox",
     inputField = "inputField",
     radioInput = "radioInput",
}

export enum HtmlForVariants {
     password = "password",
     email = "email",
     name = "name",
     surname = "surname",
     phone = "phone",
     checkboxForm = "checkboxForm",
     repeatPassword = "repeatPassword",
     text = "textInput",
}

export interface LabelProps {
     htmlFor: keyof typeof HtmlForVariants;
     textLabel?: string;
     typeLabel: keyof typeof LabelTypes;
     children?: ReactNode;
}

const Label = ({ htmlFor, textLabel, typeLabel, children }: LabelProps) => {
     return (
          <label className={`${styles.label} ${styles[typeLabel]}`} htmlFor={htmlFor}>
               <p className={styles.nameInput}>{textLabel}</p>
               {children}
          </label>
     );
};

export default Label;
