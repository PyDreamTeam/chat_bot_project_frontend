import React from "react";
import styles from "../styles/FormMyAccount.module.css";
import Title from "@/src/components/shared/text/Title";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ChangeNewPasswordInput } from "@/src/components/shared/login/ChangeNewPasswordInput/ChangeNewPasswordInput";
import { ReChangeNewPasswordInput } from "@/src/components/shared/login/ReChangeNewPasswordInput/ReChangeNewPasswordInput";
import { ButtonLogin } from "@/src/components/shared/buttons/ButtonLogin";

const ChangePassword = () => {
    return (
        <div className={styles.changePasswordBlock}>
            <Title color={"black"} type={"h5"}>
                Изменить пароль
            </Title>

            <Formik
                initialValues={{
                    new_password: "",
                    re_new_password: "",
                }}
                validationSchema={Yup.object().shape({
                    new_password: Yup.string()
                        .min(8, "содержит не менее 8 символов")
                        .matches(
                            /^(?=.*[A-Za-z][!-~]+)[^А-Яа-я]*$/,
                            "содержит как строчные (a–z), так и прописные буквы (A–Z)"
                        )
                        .max(50, "содержит не более 50 символов")
                        .matches(/^(?=.*[0-9])/, "содержит по крайней мере одну цифру (0–9)")
                        .matches(/^(?=.*[@$!%*?&])/, "содержит по крайней мере один спецсимвол")
                        .required("Введите пароль"),
                    re_new_password: Yup.string()
                        .required("Подтвердите пароль")
                        .oneOf([Yup.ref("new_password")], "Указанные пароли должны быть идентичными"),
                    uid: Yup.string(),
                    token: Yup.string(),
                })}
                onSubmit={(values) => {
                    alert("Еще не сделано на бэке");
                }}
            >
                {({ errors, touched, isValid, getFieldProps }) => {
                    const dataPassword = getFieldProps("new_password");
                    const password = dataPassword.value;

                    return (
                        <Form>
                            <ChangeNewPasswordInput errors={errors} touched={touched} password={password} />
                            <ReChangeNewPasswordInput errors={errors} touched={touched} />
                            <ButtonLogin disabled={false} active={isValid} type="submit">
                                Обновить пароль
                            </ButtonLogin>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default ChangePassword;
