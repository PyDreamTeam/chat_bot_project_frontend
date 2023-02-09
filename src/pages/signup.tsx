import {Formik, Form, ErrorMessage} from "formik";
import React, {useState} from "react";

import {Title} from "@/src/components/common/Title.styled"
import {Label} from "@/src/components/common/Label.styled";
import {Input} from "@/src/components/common/Input.styled";
import {Button, Submit} from "@/src/components/common/Button.styled";
import {StyledInlineErrorMessage} from "@/src/components/common/Input.styled";

import {WrapperRegister, BlockLeft, BlockRight} from "@/src/components/common/StyledRegister.styled";
import Link from "next/link";



export const Signup = () => {
    const [formValues, setFormValues] = useState();
    return (
        <WrapperRegister>
            <BlockLeft/>
            <BlockRight>
                <Title>
                    Регистрация
                </Title>
                <p>Уже есть аккаунт? <Link href={"/"}>
                    Войдите
                </Link></p>
                <Formik initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    checkbox: '',
                }}
                        onSubmit={(values, { setSubmitting }) => {
                            const timeOut = setTimeout(() => {
                                console.log(values);
                                setSubmitting(false);

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
                            <Label htmlFor="name">
                                <p>Имя</p>
                                <Input
                                    type="text"
                                    name="name"
                                    autoCorrect="off"
                                    autoComplete="name"
                                    placeholder="Иван"
                                    valid={touched.name && !errors.name}
                                    error={touched.name && errors.name}
                                />
                            </Label>
                            {errors.name && touched.name && (
                                <StyledInlineErrorMessage>
                                    {errors.name}
                                </StyledInlineErrorMessage>
                            )}
                            <Label htmlFor="email">
                                <p>E-mail</p>
                                <Input
                                    type="email"
                                    name="email"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    autoComplete="email"
                                    placeholder="example@mail.com"
                                    valid={touched.email && !errors.email}
                                    error={touched.email && errors.email}
                                />
                            </Label>
                            <ErrorMessage name="email">
                                {message => (
                                    <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>
                                )}
                            </ErrorMessage>
                            <Label htmlFor="password">
                                <p>Пароль</p>
                                <Input
                                    type="password"
                                    name="password"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    autoComplete="password"
                                    placeholder="Придумайте пароль"
                                    valid={touched.password && !errors.password}
                                    error={touched.password && errors.password}
                                />
                            </Label>
                            <ErrorMessage name="password">
                                {message => (
                                    <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>
                                )}
                            </ErrorMessage>
                            <Label htmlFor="checkbox">
                                <Input
                                    type="checkbox"
                                    name="checkbox"
                                />
                            </Label>
                            <p>Я хочу получать уведомления и новости на почту</p>
                            <Submit type="submit" disabled={!valid || isSubmitting}>
                                {isSubmitting ? `Submiting...` : `Submit`}
                            </Submit>
                            <p>Нажимая кнопку «Зарегистрироваться», вы принимаете условия <span>пользовательского соглашения</span> </p>
                        </Form>
                    )}
                </Formik>
            </BlockRight>
        </WrapperRegister>
    );
};

export default Signup;