import { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./dataForm.module.css";
import { useChangeDataUserMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FirstNameInput } from "../../shared/login/FirstNameInput/FirstNameInput";
import { LastNameInput } from "../../shared/login/LastNameInput/LastNameInput";
import { ButtonLogin } from "../../shared/buttons/ButtonLogin";
import { PhoneNumberInput } from "../../shared/login/PhoneNumberInput/PhoneNumberInput";

export const DataForm = () => {
    const router = useRouter();
    const [changeDataUser, { isSuccess, isLoading }] = useChangeDataUserMutation();
    const tk = JSON.parse(Cookies.get("loginUser") || "[]");
    const token = tk.access;

    useEffect(() => {
        if (isSuccess) {
            router.reload();
        }
    }, [isSuccess]);

    return (
        <div>
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    phone_number: "",
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string()
                        .min(2, "Должно быть не менее двух букв")
                        .max(30, "Слишком длинное имя")
                        .trim()
                        .matches(/^\D*$/, "Не должно содержать цифр")
                        .matches(/^[A-Za-zА-Яа-я_0-9]+$/, "Должно содержать только буквы"),
                    last_name: Yup.string()
                        .min(2, "Должно быть не менее двух букв")
                        .max(100, "Слишком длинная фамилия")
                        .trim()
                        .matches(/^\D*$/, "Не должно содержать цифр")
                        .matches(/^[A-Za-zА-Яа-я_0-9]+$/, "Должна содержать только буквы"),
                    phone_number: Yup.string().matches(/^\+375(29|25|33|44)\d{7}$/, "Неверный формат номера телефона"),
                })}
                onSubmit={(values) => {
                    const requestValues = {
                        first_name: values.first_name || undefined,
                        last_name: values.last_name || undefined,
                        phone_number: values.phone_number || undefined,
                    };

                    changeDataUser({ requestValues, token });
                }}
            >
                {({ errors, touched, isValid }) => {
                    return (
                        <Form>
                            <FirstNameInput errors={errors} touched={touched} />
                            <LastNameInput errors={errors} touched={touched} />
                            <PhoneNumberInput errors={errors} touched={touched} />
                            <div className={css.btn}>
                                <ButtonLogin type="submit" disabled={isLoading} active={isValid}>
                                    Сохранить изменения
                                </ButtonLogin>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};
