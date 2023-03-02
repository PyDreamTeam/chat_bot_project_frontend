import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FC } from "react";
import ButtonSubmit from "../../shared/buttons/ButtonSubmit";
import InputField, { InputFieldNameVariants } from "../../shared/inputs/InputField";
import styles from "./styles/styles.module.css";
import Label, { HtmlForVariants, LabelTypes } from "../../shared/labels/Label";
import CheckboxForm from "../../shared/checkboxes/CheckboxForm";
import ImageErrorForm from "../../shared/images/ImageErrorForm";
import { useRouter } from "next/router";
import { User } from "../../../store/services/authApi";
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
}

const FormUniversal: FC<FormUniversalProps> = ({
     validationSchema,
     inputFieldData,
     buttonSubmitText,
     initialValues,
     classNameForm,
     onSubmit,
}) => {
     const router = useRouter();

     return (
          <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={(values: IInitialValues) => onSubmit(values)}>
               {({ errors, touched }) => (
                    <Form className={`${styles.formUniversal} ${styles[classNameForm]}`}>
                         {inputFieldData.map(({ htmlFor, name, placeholder, textLabel, typeField }, index) => (
                              <div className={styles.inputLabelErrorWrapper} key={index}>
                                   <Label htmlFor={htmlFor} typeLabel="inputField" textLabel={textLabel} />
                                   {errors[name] && touched[name] && <ImageErrorForm />}
                                   <Field
                                        className={`${styles.inputField} ${errors[name] && touched[name] ? styles.inputError : null}`}
                                        type={typeField}
                                        id={htmlFor}
                                        name={name}
                                        placeholder={placeholder}
                                   />
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
