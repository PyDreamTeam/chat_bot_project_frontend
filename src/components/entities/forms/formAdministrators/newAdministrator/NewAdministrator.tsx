import React from "react";
import styles from "./newAdministrator.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useCreateAdminMutation } from "@/src/store/services/administrators";
import { FirstNameInput } from "@/src/components/shared/login/FirstNameInput/FirstNameInput";
import { LastNameInput } from "@/src/components/shared/login/LastNameInput/LastNameInput";
import { EmailInput } from "@/src/components/shared/login/EmaiInput/EmailInput";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { RadioButtonGroup } from "@/src/components/shared/createAdmin/RadioButtonGroup/RadioButtonGroup";
import { AdminPasswordInput } from "@/src/components/shared/createAdmin/AdminPasswordinput/AdminPasswordInput";
import { NewPasswordInput } from "@/src/components/shared/login/NewPasswordInput/NewPasswordInput";


const err = {
    min: "Содержит не менее 8 символов",
    string: "Содержит как строчные (a–z), так и прописные буквы (A–Z)",
    number: "Содержит по крайней мере одну цифру (0–9)",
    special: "содержит по крайней мере один спецсимвол",
    req: "Введите пароль",
};
const NewAdministrator = () => {
    const [createAdmin, { isLoading, error: errorData }] = useCreateAdminMutation();

    return (
        <div className={styles.addUserBlock}>
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    role: "",
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string()
                        .required("Поле обязательное для заполнения")
                        .trim()
                        .min(2, "Содержит две или более букв")
                        .max(30, "Не более 30 букв")
                        .matches(/^\D*$/, "Не должно содержать цифр"),
                    last_name: Yup.string()
                        .required("Поле обязательное для заполнения")
                        .trim()
                        .min(2, "Содержит две или более букв")
                        .max(100, "Не более 30 букв")
                        .matches(/^\D*$/, "Не должно содержать цифр"),
                    email: Yup.string()
                        .email("Неверный email")
                        .max(50, "Не более 50 символов")
                        .required("Поле обязательное для заполнения"),
                    password: Yup.string()
                        .min(8, err.min)
                        .max(50, "Не более 50 символов")
                        .required(err.req),
                    role: Yup.string().required("Требуется выбрать один из вариантов")
                })}
                onSubmit={(values) => {
                    createAdmin(values);
                }}
            >
                {({ errors, touched, getFieldProps, isValid }) => {
                    const dataEmail = getFieldProps("email");
                    const email = dataEmail.value;

                    const dataPassword = getFieldProps("password");
                    const password = dataPassword.value;

                    return (
                        <Form className={styles.form}>
                            <FirstNameInput errors={errors} touched={touched} />
                            <LastNameInput errors={errors} touched={touched} />
                            <EmailInput errors={errors} touched={touched} error={errorData} />
                            <NewPasswordInput
                                errors={errors}
                                touched={touched}
                                error={errorData}
                                password={password}
                            />
                            <RadioButtonGroup
                                name="role"
                                values={["Администратор", "Модератор"]}
                                label="Роль пользователя"
                                errors={errors}
                                touched={touched}
                            />
                            <div className={styles.buttons}>
                                <button className={styles.cancel}><a href="/admin/users/all">Отмена</a></button>
                                <button className={isValid ? styles.active : styles.disabled} disabled={isLoading} type="submit">
                                    Создать
                                </button>
                            </div>
                        </Form >
                    );
                }}
            </Formik >
            <div className={styles.icon}><Image src="/admin/people_plus.svg"
                alt="people plus"
                width={316}
                height={316}
            /></div>
        </div >
    );
};

export default NewAdministrator;
