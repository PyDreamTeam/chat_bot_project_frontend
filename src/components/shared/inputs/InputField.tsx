import React, { FC } from "react";
import { ErrorMessage, Field } from "formik";
import styles from "./styles/styles.module.css";
import Label, { LabelProps } from "@/src/components/shared/labels/Label";
import OpenEye from "@/src/public/png/OpenEye.png";
import CloseEye from "@/src/public/png/CloseEye.png";
import Image from "next/image";
import { Arrow } from "@/src/components/features/Footer/pictures/SvgConfig";

export enum InputVariantProps {
     forFooter = "forFooter",
     forAuth = "forAuth",
}

export interface IInputField extends LabelProps {
     variant?: InputVariantProps
     name: string;
     autoComplete: string;
     placeholder: string;
     valid: boolean;
     error: boolean;
     type?: string;
     onClick?: ()=>void;
     show?: boolean;
}

const InputField: FC<IInputField> = ({
     variant= InputVariantProps.forAuth,
     htmlFor = "",
     typeLabel,
     text = "",
     name,
     autoComplete,
     valid,
     error,
     type,
     onClick,
     show,

}) => {
     return (
          variant === InputVariantProps.forAuth ?  <>
               <Label htmlFor={htmlFor} typeLabel={typeLabel} text={text}>
                    <Field
                         className={styles.inputField}
                         name={name}
                         autoComplete={autoComplete}
                         valid={valid}
                         error={error}
                         type={type}
                    />
                    {htmlFor === "password" && <Image className={styles.inputImage}
                         src={show ? OpenEye : CloseEye}
                         alt="eye"
                         onClick={onClick}
                    />}
               </Label>
               <ErrorMessage name={htmlFor}>
                    {(message) => <div className={styles.inputError}>{message}</div>}
               </ErrorMessage>
          </> : <>
               <div className={styles.footerInputBlock}>
                    <Label htmlFor={htmlFor} typeLabel={typeLabel} text={text}>
                         <Field
                              className={styles.inputFieldFooter}
                              name={name}
                              autoComplete={autoComplete}
                              valid={valid}
                              error={error}
                              type={type}
                         />
                         <button className={styles.footerArrowButton} onClick={onClick}>{Arrow}</button>
                    </Label>
               </div>
               <ErrorMessage name={htmlFor}>
                    {(message) => <div className={styles.inputError}>{message}</div>}
               </ErrorMessage>
          </>

     );
};

export default InputField;
