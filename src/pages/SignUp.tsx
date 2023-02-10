import {Formik, Form, ErrorMessage} from "formik";
import React, {useState} from "react";

import {Title} from "@/src/components/common/Title.styled"
import {Label,LabelsBox} from "@/src/components/common/Label.styled";
import {Input} from "@/src/components/common/Input.styled";
import {Button, Submit} from "@/src/components/common/Button.styled";
import {StyledInlineErrorMessage} from "@/src/components/common/Input.styled";

import {WrapperRegister, BlockLeft, BlockRight} from "@/src/components/common/StyledRegister.styled";
import Link from "next/link";
import * as Yup from "yup";



export const Signup = () => {
    const [, setFormValues] = useState();
    return (
        <WrapperRegister>
            <BlockLeft/>
            <BlockRight>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}>
                    <Title>
                        Регистрация
                    </Title>
                    <p style={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '150%',
                        textAlign: 'center',
                        color: "#595F6C",
                        display:'flex',
                        flexDirection:'row',
                        width: '216px',
                    }} >
                        Уже есть аккаунт? 
                        <Link href={"/SignIn"} style={{
                            textDecoration:'none',
                        }}>
                            Войдите
                        </Link>
                    </p>
                    <Formik initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string()
                                    .min(0, "Введите имя")
                                    .required("Введите имя"),
                                email: Yup.string()
                                    .email("Электронная почта неверна")
                                    .required("Введите электронную почту"),
                                password: Yup.string()
                                    .min(8, "Пароль слишком короткий")
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
                                <LabelsBox>
                                    <Label htmlFor="name">
                                        <p>Имя</p>
                                        <Input
                                            type="text"
                                            name="name"
                                            autoCorrect="off"
                                            autoComplete="name"
                                            placeholder="Иван"
                                            valid={Boolean(touched.name && !errors.name)}
                                            error={Boolean(touched.name && errors.name)}
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
                                            valid={Boolean(touched.email && !errors.email)}
                                            error={Boolean(touched.email && errors.email)}
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
                                            valid={Boolean(touched.password && !errors.password)}
                                            error={Boolean(touched.password && errors.password)}
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
                                        <p>Я хочу получать уведомления и новости на почту</p>
                                    </Label>
                                </LabelsBox>
                                <Submit type="submit" disabled={!isValid || isSubmitting}>
                                    {isSubmitting ? `Подождите...` : `Зарегистрироваться`}
                                </Submit>
                                <p style={{
                                    textAlign:'center'
                                }}>Нажимая кнопку «Зарегистрироваться», вы принимаете условия <span>пользовательского соглашения</span></p>
                            </Form> 
                        )}
                    </Formik>
                </div>
                
            </BlockRight>
        </WrapperRegister>
    );
};

export default Signup;
