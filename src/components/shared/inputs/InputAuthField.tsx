import React, { FC } from "react";
import { ErrorMessage, Field } from "formik";
import styles from "./styles/styles.module.css";
import Label, { LabelProps } from "@/src/components/shared/labels/Label";
import { Arrow } from "@/src/components/features/HomePage/Footer/img/SvgConfig";
import uuid from "uuid-random";

export enum InputVariantProps {
    forFooter = "forFooter",
    forAuth = "forAuth",
}

export enum InputFieldNameVariants {
    password = "password",
    email = "email",
    name = "name",
    repeatPassword = "repeatPassword",
    surname = "surname",
    tel = "tel",
    first_name = "first_name",
    last_name = "last_name",
}
export interface IInputField extends LabelProps {
    variant?: keyof typeof InputVariantProps;
    name: keyof typeof InputFieldNameVariants;
    placeholder: string;
    valid: boolean;
    error: boolean;
    type?: string;
    onClick?: () => void;
    show?: boolean;
    tel?: string;
}

const InputAuthField: FC<IInputField> = ({
    variant = InputVariantProps.forAuth,
    htmlFor,
    typeLabel,
    textLabel = "",
    name,
    placeholder,
    valid,
    error,
    type,
    onClick,
    show,
}) => {
    return variant === InputVariantProps.forAuth ? (
        <Field key={uuid()} placeholder={placeholder} className={styles.inputField} name={name} />
    ) : (
        <>
            <div className={styles.footerInputBlock}>
                <Label htmlFor={htmlFor} typeLabel={typeLabel} textLabel={textLabel}>
                    <Field
                        placeholder={placeholder}
                        className={styles.inputFieldFooter}
                        name={name}
                        valid={valid}
                        error={error}
                        type={type}
                    />
                </Label>
            </div>
            <ErrorMessage name={htmlFor}>
                {(message) => <div className={styles.inputError}>{message}</div>}
            </ErrorMessage>
        </>
    );
};

export default React.memo(InputAuthField);
