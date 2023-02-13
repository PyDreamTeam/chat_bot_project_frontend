import {Formik, Form, ErrorMessage} from "formik";
import React, {useState} from "react";

import {Title} from "@/src/components/common/Title.styled"
import {Label} from "@/src/components/common/Label.styled";
import {Input} from "@/src/components/common/Input.styled";
import {Submit} from "@/src/components/common/Button.styled";
import {StyledInlineErrorMessage} from "@/src/components/common/Input.styled";

import {WrapperRegister, BlockLeft, BlockRight} from "@/src/components/common/StyledRegister.styled";
import Link from "next/link";
import * as Yup from "yup";


export const SignIn = () => {
    const [formValues, setFormValues] = useState();
    return (
        <WrapperRegister>
            <BlockLeft/>
            <BlockRight>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Title>
                        Вход
                    </Title>
                    <p>Ещё нет аккаунта? <Link href={"/SignUp"}>
                        Регистрация
                    </Link></p>
                    <p>Войдите через соцсеть</p>


                    <Formik initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email("Электронная почта неверна")
                                    .required("Введите электронную почту"),
                                password: Yup.string()
                                    .min(8, "Неверный пароль")
                                    .required("Введите пароль"),
                            })}
                            onSubmit={(values, actions) => {
                                console.log(values);
                                // @ts-ignore
                                setFormValues(values);

                                const timeOut = setTimeout(() => {
                                    actions.setSubmitting(false);

                                    clearTimeout(timeOut);
                                }, 1000);
                            }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleSubmit,
                              isSubmitting,
                              isValidating,
                              isValid
                          }) => (
                            <Form name="contact" method="post" onSubmit={handleSubmit}>
                                <p>Или с помощью почты и пароля</p>
                                <div style={{
                                    height: '120px',
                                }}>
                                    <Label htmlFor="email">
                                        <p>E-mail</p>
                                        <Input
                                            type="email"
                                            name="email"
                                            autoCapitalize="off"
                                            autoCorrect="off"
                                            autoComplete="email"
                                            placeholder="example@mail.com"
                                            valid={Boolean(touched.email && !errors.email)}
                                            error={Boolean(touched.email && errors.email)}
                                        />
                                    </Label>
                                    <ErrorMessage name="email">
                                        {message => (
                                            <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>
                                        )}

                                    </ErrorMessage>
                                </div>
                                <Label htmlFor="password">
                                    <p>Пароль</p>
                                    <Input
                                        type="password"
                                        name="password"
                                        autoCapitalize="off"
                                        autoCorrect="off"
                                        autoComplete="password"
                                        placeholder="Введите пароль"
                                        valid={Boolean(touched.password && !errors.password)}
                                        error={Boolean(touched.password && errors.password)}
                                    />
                                </Label>
                                <ErrorMessage name="password">
                                    {message => (
                                        <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>
                                    )}
                                </ErrorMessage>
                                <Submit type="submit" disabled={!isValid || isSubmitting}>
                                    {isSubmitting ? `Войти...` : `Войти`}
                                </Submit>
                                <p>Забыли пароль? <span>Восстановите здесь</span></p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </BlockRight>
        </WrapperRegister>
    );
};

export default SignIn;