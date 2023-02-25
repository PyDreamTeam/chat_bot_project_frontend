import { Form, Formik } from "formik";
import React, { FC } from "react";
import ButtonSubmit from "../../shared/buttons/ButtonSubmit";
import InputField, { InputFieldNameVariants } from "../../shared/inputs/InputField";
import styles from "./styles/styles.module.css";
import uuid from "uuid-random";
import { HtmlForVariants, LabelTypes } from "../../shared/labels/Label";

export interface IInputField {
     htmlFor: keyof typeof HtmlForVariants | "";
     name: keyof typeof InputFieldNameVariants;
     placeholder: string;
     autoComplete: string;
     textLabel: string;
}

enum ClassNameFormVariants {
     signUp = "signUp",
     signIn = "signIn",
     restorePassword = "restorePassword",
}

interface FormUniversalProps {
     inputFieldData: Array<IInputField>;
     buttonSubmitText: string;
     initialValues: {
          name?: string;
          email: string;
          password?: string;
     };
     classNameForm: keyof typeof ClassNameFormVariants;
}

const FormUniversal: FC<FormUniversalProps> = ({ inputFieldData, buttonSubmitText, initialValues, classNameForm }) => {
     return (
          <Formik
               initialValues={initialValues}
               onSubmit={(values) => {
                    console.log("FORMIK VALUES", values);
               }}
          >
               {({ values, errors }) => (
                    <Form className={`${styles.formUniversal} ${styles[classNameForm]}`}>
                         {inputFieldData.map(({ htmlFor, name, placeholder, autoComplete, textLabel }) => (
                              <InputField
                                   textLabel={textLabel}
                                   autoComplete={autoComplete}
                                   typeLabel={LabelTypes.inputField}
                                   htmlFor={htmlFor}
                                   name={name}
                                   key={uuid()}
                                   placeholder={placeholder}
                                   error={!!errors[name]}
                                   valid={!!errors[name]}
                              />
                         ))}
                         <ButtonSubmit text={buttonSubmitText} isDisabled={false} />
                    </Form>
               )}
          </Formik>
     );
};

export default FormUniversal;
