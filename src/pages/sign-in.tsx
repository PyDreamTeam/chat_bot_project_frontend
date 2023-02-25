import { Formik, Form, ErrorMessage, Field } from "formik";
import React, { useState } from "react";

import Label, { LabelTypes } from "@/src/components/shared/labels/Label";
import InputField from "@/src/components/shared/inputs/InputField";
import { Submit } from "@/src/components/Button.styled";

import Link from "next/link";
import * as Yup from "yup";

import { useSignInMutation } from "@/src/store/services/authApi";
import AuthWrapper from "@/src/components/widgets/AuthWrapper/AuthWrapper";

export const SignIn = () => {
     const [formValues, setFormValues] = useState();

     const [show, setShow] = useState<boolean>(false);

     const [signIn, signInResponse] = useSignInMutation(); //signIn - функция для запроса + signInResponse - объект ответа, он показывает статусы

     console.log(signInResponse?.data);

     const showPassword = () => {
          setShow(!show);
     };

     return (
          <AuthWrapper titleText={"Вход"}>
               <Formik
                    initialValues={{
                         name: "",
                         email: "",
                         password: "",
                    }}
                    validationSchema={Yup.object().shape({
                         email: Yup.string().email("Электронная почта неверна").required("Введите электронную почту"),
                         password: Yup.string().min(8, "Неверный пароль").required("Введите пароль"),
                    })}
                    onSubmit={(values: any, actions) => {
                         signIn(values);

                         setFormValues(values);

                         const timeOut = setTimeout(() => {
                              actions.setSubmitting(false);

                              clearTimeout(timeOut);
                         }, 1000);
                    }}
               >
                    {({ values, errors, touched, handleSubmit, isSubmitting, isValidating, isValid }) => (
                         <Form name="contact" method="post" onSubmit={handleSubmit}>
                              <InputField
                                   text="E-mail"
                                   typeLabel={LabelTypes.inputField}
                                   type="text"
                                   htmlFor="email"
                                   name="email"
                                   autoComplete="email"
                                   placeholder="example@mail.com"
                                   valid={Boolean(touched.password && !errors.password)}
                                   error={Boolean(touched.password && errors.password)}
                              />
                              <InputField
                                   text="Пароль"
                                   typeLabel={LabelTypes.inputField}
                                   type={show ? "text" : "password"}
                                   htmlFor="password"
                                   name="password"
                                   autoComplete="password"
                                   placeholder="Введите пароль"
                                   valid={Boolean(touched.password && !errors.password)}
                                   error={Boolean(touched.password && errors.password)}
                                   onClick={showPassword}
                                   show={show}
                              />
                              <Submit type="submit" disabled={!isValid || isSubmitting}>
                                   {isSubmitting ? "Войти..." : "Войти"}
                              </Submit>
                         </Form>
                    )}
               </Formik>
          </AuthWrapper>
     );
};

export default SignIn;
