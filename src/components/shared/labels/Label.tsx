import React, { FC, ReactNode } from "react";
import styles from "./styles/Label.module.css";
import Text from "@/src/components/shared/text/Text";

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
    first_name = "first_name",
    last_name = "last_name",
}

export interface LabelProps {
    htmlFor: keyof typeof HtmlForVariants;
    textLabel?: string;
    typeLabel: keyof typeof LabelTypes;
    children?: ReactNode;
    isChecked?: boolean;
}

const Label = ({ htmlFor, textLabel, typeLabel, children, isChecked }: LabelProps) => {
    return (
        <label className={`${styles[typeLabel]}`} htmlFor={htmlFor}>
            <Text
                type={isChecked === true ? "reg16" : "reg18"}
                color={"black"}
                className={`${styles[typeLabel]} ${styles.nameInput}`}
            >
                {textLabel}
            </Text>
            {children}
        </label>
    );
};

export default Label;
