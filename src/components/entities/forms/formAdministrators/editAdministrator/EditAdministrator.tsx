import React from "react";
import styles from "../newAdministrator/newAdministrator.module.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useCreateUserMutation } from "@/src/store/services/userAuth";
import { FirstNameInput } from "@/src/components/shared/login/FirstNameInput/FirstNameInput";
import { LastNameInput } from "@/src/components/shared/login/LastNameInput/LastNameInput";
import { EmailInput } from "@/src/components/shared/login/EmaiInput/EmailInput";
import { NewPasswordInput } from "@/src/components/shared/login/NewPasswordInput/NewPasswordInput";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { RadioButtonGroup } from "@/src/components/shared/login/RadioButtonGroup/RadioButtonGroup";


const err = {
    min: "Содержит не менее 8 символов",
    string: "Содержит как строчные (a–z), так и прописные буквы (A–Z)",
    number: "Содержит по крайней мере одну цифру (0–9)",
    special: "содержит по крайней мере один спецсимвол",
    req: "Введите пароль",
};
const EditAdministrator = () => {
    const [createUser, { isSuccess, error: errorData, isLoading }] = useCreateUserMutation();

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
                        .required("Введите имя")
                        .min(2, "Содержит две или более букв")
                        .max(30, "Не более 30 букв")
                        .matches(/^\D*$/, "Не должно содержать цифр"),
                    last_name: Yup.string()
                        .min(2, "Содержит две или более букв")
                        .max(100, "Не более 30 букв")
                        .matches(/^\D*$/, "Не должно содержать цифр"),
                    email: Yup.string()
                        .email("Неккоректный email")
                        .max(50, "Не более 50 символов")
                        .required("Введите email"),
                    password: Yup.string()
                        .min(8, err.min)
                        .max(50, "Не более 50 символов")
                        .matches(/^(?=.*[A-Za-z][!-~]+)[^А-Яа-я]*$/, err.string)
                        .matches(/^(?=.*[0-9])/, err.number)
                        .matches(/^(?=.*[@$!%*?&])/, err.special)
                        .required(err.req),
                    role: Yup.string().required("Требуется выбрать один из вариантов")
                })}
                onSubmit={(values) => {
                    //createAdmin(values);
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
                                <button className={styles.create} disabled={isLoading} type="submit">
                                    Сохранить
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
            <div className={styles.icon}><Image src="/admin/people_correct.svg"
                alt="people plus"
                width={316}
                height={316}
            /></div>
        </div>
    );
};

export default EditAdministrator;
