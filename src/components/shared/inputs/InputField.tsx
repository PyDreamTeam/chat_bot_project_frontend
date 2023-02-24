import React from "react";
import { Field } from "formik";
import styles from "./styles/styles.module.css";

const InputField = ({ valid, error, ...props }: any) => {
     return <Field className={styles.inputField} {...props} />; //////<------ Я здесь просто скопировал из FilteredPropsInputField
};

export default InputField;
