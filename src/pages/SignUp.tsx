import {Formik, Form, ErrorMessage} from "formik";
import React, {useState} from "react";

import {Title} from "@/src/components/common/Title.styled"
import {Label, LabelsBox} from "@/src/components/common/Label.styled";
import {Input} from "@/src/components/common/Input.styled";
import {Submit} from "@/src/components/common/Button.styled";
import {StyledInlineErrorMessage} from "@/src/components/common/Input.styled";

import OpenEye from '../images/OpenEye.png'
import CloseEye from '../images/CloseEye.png'

import {WrapperRegister, BlockLeft, BlockRight, ContentBlock} from "@/src/components/common/StyledRegister.styled";
import Link from "next/link";
import Image from 'next/image';
import * as Yup from "yup";

import {useSignUpMutation} from "@/src/app/services/auth";

export const SignUp = () => {

    const [signUp, signUpResponse] = useSignUpMutation()     // signUp - функция для запроса + signUpResponse - объект ответа, он показывает статусы

    console.log(signUpResponse?.data)

    const [show, setShow] = useState<boolean>(false);
    const showPassword = () => {
        setShow(!show)
    }

    return (
        <WrapperRegister>
            <BlockLeft/>
            <BlockRight>
                <ContentBlock>
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
                        display: 'flex',
                        flexDirection: 'row',
                        width: '216px',
                    }}>
                        Уже есть аккаунт?
                        <Link href={"/SignIn"} style={{
                            textDecoration: 'none',
                        }}>
                            Войдите
                        </Link>
                    </p>
                    <Formik initialValues={{
                        username: '',
                        email: '',
                        password: '',
                    }}
                            validationSchema={Yup.object().shape({
                                username: Yup.string()
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
                                // console.log(values);
                                signUp(values)                // при нажати на кнопку, мы вызываем функцию signup и она вызывает функцию в файле auth.ts - строка 33
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
                                    <div style={{
                                        height: '120px',
                                    }}>
                                        <Label htmlFor="username">
                                            <p>Имя</p>
                                            <Input
                                                type="text"
                                                name="username"
                                                autoCorrect="off"
                                                autoComplete="username"
                                                placeholder="Иван"
                                                valid={Boolean(touched.username && !errors.username)}
                                                error={Boolean(touched.username && errors.username)}
                                            />
                                        </Label>
                                        {errors.username && touched.username && (
                                            <StyledInlineErrorMessage>
                                                {errors.username}
                                            </StyledInlineErrorMessage>
                                        )}
                                    </div>
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
                                    <div style={{
                                        height: '120px',
                                    }}>
                                        <Label htmlFor="password">
                                            <p>Пароль</p>
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}>
                                                <Input
                                                    type={show ? 'text' : 'password'}
                                                    name="password"
                                                    autoCapitalize="off"
                                                    autoCorrect="off"
                                                    autoComplete="password"
                                                    placeholder="Придумайте пароль"
                                                    valid={Boolean(touched.password && !errors.password)}
                                                    error={Boolean(touched.password && errors.password)}
                                                />
                                                <Image
                                                    src={show ? OpenEye : CloseEye}
                                                    alt="Picture of the author"
                                                    width={20}
                                                    height={20}
                                                    onClick={showPassword}
                                                    style={{
                                                        margin: '0 -40px'
                                                    }}
                                                />
                                            </div>
                                        </Label>
                                        <ErrorMessage name="password">
                                            {message => (
                                                <StyledInlineErrorMessage>{message}</StyledInlineErrorMessage>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <Label htmlFor="checkbox">
                                        <Input
                                            type="checkbox"
                                            name="get_email_notifications"
                                        />
                                        <p>Я хочу получать уведомления и новости на почту</p>
                                    </Label>
                                </LabelsBox>
                                <Submit type="submit" disabled={!isValid || signUpResponse.isLoading}>
                                    {signUpResponse.isLoading ? `Подождите...` : `Зарегистрироваться`}
                                </Submit>
                                <p style={{
                                    textAlign: 'center'
                                }}>Нажимая кнопку «Зарегистрироваться», вы принимаете условия <span>пользовательского соглашения</span>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </ContentBlock>
            </BlockRight>
            {/* <ProtectedComponent/> */}
        </WrapperRegister>

    );
};

export default SignUp;