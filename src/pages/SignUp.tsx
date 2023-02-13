import {Formik, Form, ErrorMessage} from "formik";
import React from "react";

import {Title} from "@/src/components/common/Title.styled"
import {Label, LabelsBox} from "@/src/components/common/Label.styled";
import {Input} from "@/src/components/common/Input.styled";
import {Submit} from "@/src/components/common/Button.styled";
import {StyledInlineErrorMessage} from "@/src/components/common/Input.styled";

import {WrapperRegister, BlockLeft, BlockRight} from "@/src/components/common/StyledRegister.styled";
import Link from "next/link";
import * as Yup from "yup";

import {useSignUpMutation} from "@/src/app/services/auth";

export const Signup = () => {
    //для пароля
    // const [show, setShow] = React.useState(false)
    // const handleClick = () => setShow(!show)

    const [signUp, signUpResponse] = useSignUpMutation()     // signUp - функция для запроса + signUpResponse - объект ответа, он показывает статусы

    console.log(signUpResponse?.data)

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
                </div>
            </BlockRight>
            {/* <ProtectedComponent/> */}
        </WrapperRegister>

    );
};

export default Signup;