import React, { FC, ReactNode } from "react";
import styles from "./styles/TextField.module.css";

export enum TextFieldTypes {
     h1 = "h1",
     h2 = "h2",
     h3 = "h3",
     h4 = "h4",
     h5 = "h4",
     p = "p",
}

export enum TextColor {
     black = "black",
     grey = "grey",
     telegray = "telegray",
     red = "red",
     green = "green",
}

interface ITextFieldProps {
     children: ReactNode;
     type: keyof typeof TextFieldTypes;
     color: keyof typeof TextColor;
}

const TextField: FC<ITextFieldProps> = ({ type, children, color }) => {
     return <p className={`${styles[type]} ${styles[color]}`}>{children}</p>;
};
export default TextField;