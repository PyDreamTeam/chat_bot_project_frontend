import Text from "@/src/components/shared/text/Text";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import css from "./componentSignUp.module.css";
import { ButtonLogin } from "@/src/components/shared/buttons/ButtonLogin";
import { useCreateUserMutation, useSendAgainMutation } from "@/src/store/services/userAuth";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import { FirstNameInput } from "@/src/components/shared/login/FirstNameInput/FirstNameInput";
import { LastNameInput } from "@/src/components/shared/login/LastNameInput/LastNameInput";
import { EmailInput } from "@/src/components/shared/login/EmaiInput/EmailInput";
import { NewPasswordInput } from "@/src/components/shared/login/NewPasswordInput/NewPasswordInput";
import { RePasswordInput } from "@/src/components/shared/login/RePasswordInput/RePasswordInput";
import { GetEmailNotification } from "@/src/components/shared/login/GetEmailNotification/GetEmailNotifications";
import Cookies from "js-cookie";
import { EmailEngRegExp, NameRegExp } from "@/src/shared/constants/regExps";
import { LoaderStatus } from "@/src/components/shared/LoaderStatus/LoaderStatus";
import { Timer } from "@/src/components/entities/Timer/Timer";
import Image from "next/image";

const err = {
    min: "Содержит не менее 8 символов",
    string: "Содержит как строчные (a–z), так и прописные буквы (A–Z)",
    number: "Содержит по крайней мере одну цифру (0–9)",
    special: "Содержит по крайней мере один спецсимвол",
    req: "Введите пароль",
};

const TemplateSignUp = () => {
    const [createUser, { isSuccess, error: errorData, isLoading }] = useCreateUserMutation();
    const [sendAgain] = useSendAgainMutation();
    const [emailUser, setEmailUser] = useState("");

    const sendAgainEmail = async () => {
        const email = await JSON.parse(Cookies.get("emailUser") || "[]");
        sendAgain({ email: email });
    };
    useEffect(() => {
        setEmailUser(JSON.parse(Cookies.get("emailUser") || "[]"));
    }, [emailUser, isLoading]);

    return (
        <div className={css.container}>
            {!isSuccess ? (
                <AuthWrapper titleText={"Регистрация"}>
                    <div className={css.wrapper}>
                        <LoaderStatus isLoading={isLoading} />
                        <div className={css.account}>
                            <Text type="reg16" color="grey" className={css.centerText}>
                                Уже есть аккаунт?
                                <Link href={"/sign-in"} className={css.link}>
                                    {" "}
                                    Войдите
                                </Link>
                            </Text>
                        </div>
                        <Formik
                            initialValues={{
                                first_name: "",
                                last_name: "",
                                email: "",
                                password: "",
                                re_password: "",
                                get_email_notifications: false,
                            }}
                            validationSchema={Yup.object().shape({
                                first_name: Yup.string()
                                    .trim()
                                    .required("Введите имя")
                                    .min(2, "Содержит две или более букв")
                                    .max(30, "Не более 30 букв")
                                    .matches(NameRegExp, "Может содержать только буквы и не более одного дефиса"),
                                last_name: Yup.string()
                                    .trim()
                                    .min(2, "Содержит две или более букв")
                                    .max(30, "Не более 30 букв")
                                    .matches(NameRegExp, "Может содержать только буквы и не более одного дефиса"),
                                email: Yup.string()
                                    .matches(EmailEngRegExp, "Некорректный email")
                                    .max(50, "Не более 50 символов")
                                    .required("Введите email"),
                                password: Yup.string()
                                    .min(8, err.min)
                                    .max(50, "Не более 50 символов")
                                    .matches(/^(?!.*[^\P{Alphabetic}a-zA-Z])/u, err.string)
                                    .matches(/^(?=.*[0-9])/, err.number)
                                    .matches(/^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\])/, err.special)
                                    .required(err.req),
                                re_password: Yup.string()
                                    .required("Подтвердите пароль")
                                    .oneOf([Yup.ref("password")], "Пароли не совпадают"),
                            })}
                            onSubmit={(values) => {
                                Cookies.set("emailUser", JSON.stringify(values.email));
                                createUser(values);
                            }}
                        >
                            {({ errors, touched, getFieldProps, isValid }) => {
                                const dataEmail = getFieldProps("email");
                                const email = dataEmail.value;

                                const dataPassword = getFieldProps("password");
                                const password = dataPassword.value;

                                return (
                                    <Form className={css.form}>
                                        <FirstNameInput errors={errors} touched={touched} />
                                        <LastNameInput errors={errors} touched={touched} />
                                        <EmailInput errors={errors} touched={touched} error={errorData} />
                                        <NewPasswordInput
                                            errors={errors}
                                            touched={touched}
                                            error={errorData}
                                            password={password}
                                        />
                                        <RePasswordInput errors={errors} touched={touched} />
                                        <GetEmailNotification />

                                        <ButtonLogin disabled={isLoading} active={isValid} type="submit">
                                            Зарегистрироваться
                                        </ButtonLogin>
                                        <div className={css.blockInfo}>
                                            <Text type={"reg16"} color={"grey"}>
                                                Нажимая кнопку «Зарегистрироваться», вы принимаете условия
                                                <Link href={"/"} className={css.link}>
                                                    {" "}
                                                    пользовательского соглашения
                                                </Link>
                                            </Text>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </AuthWrapper>
            ) : (
                <AuthWrapper titleText="Подтверждение Е-mail">
                    <div className={css.positionImg}>
                        <Image src="/sign/saveChanges.svg" alt="icon" width={120} height={120} className={css.img} />
                        <p className={css.textSendMail}>
                            На <span className={css.email}>{emailUser}</span> отправлено письмо. Пожалуйста, перейдите
                            по ссылке в письме, чтобы закончить регистрацию.
                        </p>
                        <div className={css.timer}>
                            <Timer onClick={sendAgainEmail} />
                        </div>
                    </div>
                </AuthWrapper>
            )}
        </div>
    );
};

export default TemplateSignUp;
