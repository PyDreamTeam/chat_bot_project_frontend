import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FC } from "react";
import ButtonSubmit from "../../shared/buttons/ButtonSubmit";
import { InputFieldNameVariants } from "../../shared/inputs/InputAuthField";
import styles from "./styles/styles.module.css";
import Label, { HtmlForVariants} from "../../shared/labels/Label";
import CheckboxForm from "../../shared/checkboxes/CheckboxForm";
import ImageErrorForm from "../../shared/images/ImageErrorForm";

import { useRouter } from "next/router";

import ButtonEye from "@/src/components/shared/buttons/ButtonEye";

export interface IInputField {
     htmlFor: keyof typeof HtmlForVariants;
     name: keyof typeof InputFieldNameVariants;
     placeholder: string;
     textLabel: string;
     typeField: Exclude<keyof typeof InputFieldNameVariants, "repeatPassword">;
}

enum ClassNameFormVariants {
     signUp = "signUp",
     signIn = "signIn",
     restorePassword = "restorePassword",
     changePassword = "changePassword",
}

export interface IInitialValues {
     name?: string;
     email?: string;
     password?: string;
     get_email_notifications?: string | Array<string>;
     repeatPassword?: string;
}
interface FormUniversalProps {
     inputFieldData: Array<IInputField>;
     validationSchema: any;
     buttonSubmitText: string;
     initialValues: IInitialValues;
     classNameForm: keyof typeof ClassNameFormVariants;
     onSubmit: (values: any) => void | Promise<any>;
     onClick?: any;
     showEye?:  boolean;
     activeEye?: Record<string, boolean>
}

const getFieldType = (type: string, isHidePassword: boolean) => {
     if (type !== "password" || isHidePassword) {
          return type;
     }

     return "text";
};

const FormUniversal: FC<FormUniversalProps> = ({
     validationSchema,
     inputFieldData,
     buttonSubmitText,
     initialValues,
     classNameForm,
     onSubmit,
     showEye,
     onClick,
     activeEye,
}) => {
     const router = useRouter();

     return (
          <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={(values: IInitialValues) => onSubmit(values)}>
               {({ errors, touched }) => (
                    <Form className={`${styles.formUniversal} ${styles[classNameForm]}`}>
                         {inputFieldData.map(({ htmlFor, name, placeholder, textLabel, typeField }, index) => (
                              <div className={styles.inputLabelErrorWrapper} key={htmlFor}>
                                   <Label htmlFor={htmlFor} typeLabel="inputField" textLabel={textLabel} />
                                   {errors[name] && touched[name] && <ImageErrorForm />}
                                   <Field
                                        className={`${styles.inputField} ${errors[name] && touched[name] ? styles.inputError : null}`}
                                        type={getFieldType(typeField, activeEye ? Boolean(activeEye[name]) : !!showEye)}
                                        id={htmlFor}
                                        name={name}
                                        placeholder={placeholder}
                                   />
                                   {typeField === "password" && (
                                        <ButtonEye isOpenEye={!activeEye?.[name]} id={htmlFor} onClick={() => onClick(htmlFor)} />
                                   )}
                                   <div className={styles.errorMessage}>
                                        <ErrorMessage name={name} />
                                   </div>
                              </div>
                         ))}
                         {/* -----Чекбокс с уведомлениями только для формы регистрации-----*/}
                         {classNameForm === "signUp" && (
                              <div className={styles.notificationsBlock}>
                                   <CheckboxForm />
                                   <Label
                                        typeLabel="checkbox"
                                        htmlFor="checkboxForm"
                                        textLabel="Я хочу получать уведомления и новости на почту"
                                   />
                              </div>
                         )}

                         <ButtonSubmit text={buttonSubmitText} isDisabled={false} />
                    </Form>
               )}
          </Formik>
     );
};

export default React.memo(FormUniversal);
