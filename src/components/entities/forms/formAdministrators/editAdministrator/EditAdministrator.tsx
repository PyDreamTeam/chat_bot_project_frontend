import React from "react";
import styles from "../newAdministrator/newAdministrator.module.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FirstNameInput } from "@/src/components/shared/login/FirstNameInput/FirstNameInput";
import { LastNameInput } from "@/src/components/shared/login/LastNameInput/LastNameInput";
import { EmailInput } from "@/src/components/shared/login/EmaiInput/EmailInput";
import { NewPasswordInput } from "@/src/components/shared/login/NewPasswordInput/NewPasswordInput";
import Image from "next/image";
import { RadioButtonGroup } from "@/src/components/shared/createAdmin/RadioButtonGroup/RadioButtonGroup";
import { useRouter } from "next/router";
import { userData } from "@/src/pages/admin/users/all/allUsers";

const err = {
    min: "Содержит не менее 8 символов",
    max: "Не более 50 символов",
    string: "Содержит как строчные (a–z), так и прописные буквы (A–Z)",
    number: "Содержит по крайней мере одну цифру (0–9)",
    special: "содержит по крайней мере один спецсимвол",
    req: "Введите пароль",
};

const EditAdministrator = () => {
    const route = useRouter();
    const { query } = useRouter();
    //const [editAdmin, { error: errorData, isLoading }] = useEditAdminMutation();

    const user = userData.find((person) => (person.id === Number(query.id)));

    return (
        <div className={styles.addUserBlock}>
            {user && <Formik
                initialValues={{
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    user_role: user.user_role,
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string()
                        .required("Введите имя")
                        .trim()
                        .min(2, "Содержит две или более букв")
                        .max(30, "Не более 30 букв")
                        .matches(/^\D*$/, "Не должно содержать цифр"),
                    last_name: Yup.string()
                        .required("Введите фамилилю")
                        .trim()
                        .min(2, "Содержит две или более букв")
                        .max(100, "Не более 30 букв")
                        .matches(/^\D*$/, "Не должно содержать цифр"),
                    email: Yup.string()
                        .email("Неккоректный email")
                        .max(50, "Не более 50 символов")
                        .required("Введите email"),
                    password: Yup.string()
                        .min(8, err.min)
                        .max(50, err.max)
                        .matches(/^(?!.*[^\P{Alphabetic}a-zA-Z])/u, err.string)
                        .matches(/^(?=.*[0-9])/, err.number)
                        .matches(/^(?=.*[@$!%*?&])/, err.special)
                        .required(err.req),
                    user_role: Yup.string().required("Требуется выбрать один из вариантов")
                })}
                onSubmit={(values) => {
                    console.log(values);
                    //editAdmin(values);
                    route.push("/admin/users/all");
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
                            {/* <EmailInput errors={errors} touched={touched} error={errorData} />
                            <NewPasswordInput
                                errors={errors}
                                touched={touched}
                                error={errorData}
                                password={password}
                            /> */}
                            <RadioButtonGroup
                                name="user_role"
                                values={["AD", "MN"]}
                                label="Роль пользователя"
                                errors={errors}
                                touched={touched}
                            />
                            <div className={styles.buttons}>
                                <button className={styles.cancel}><a href="/admin/users/all">Отмена</a></button>
                                {/*  <button className={isValid ? styles.active : styles.disabled} disabled={isLoading} type="submit">
                                    Сохранить
                                </button> */}
                            </div>
                        </Form>
                    );
                }}
            </Formik>}
            <div className={styles.icon}><Image src="/admin/people_correct.svg"
                alt="people edit"
                width={316}
                height={316}
            /></div>
        </div>
    );
};

export default EditAdministrator;
