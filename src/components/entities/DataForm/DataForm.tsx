import { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./dataForm.module.css";
import { useChangeDataUserMutation, useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FirstNameInput } from "../../shared/login/FirstNameInput/FirstNameInput";
import { LastNameInput } from "../../shared/login/LastNameInput/LastNameInput";
import { ButtonLogin } from "../../shared/buttons/ButtonLogin";
import { PhoneInput } from "../../shared/login/PhoneNumberInput/PnoneInput";
import { isPossiblePhoneNumber } from "react-phone-number-input";

export const DataForm = () => {
    const router = useRouter();
    const [changeDataUser, { isSuccess }] = useChangeDataUserMutation();
    const tk = JSON.parse(Cookies.get("loginUser") || "[]");
    const token = tk.access;
    const { data } = useDataUserQuery(tk);

    useEffect(() => {
        if (isSuccess) {
            // router.reload();
        }
    }, [isSuccess]);

    return (
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    first_name: data?.first_name || "",
                    last_name: data?.last_name || "",
                    phone_number: data?.phone_number || "",
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string()
                        .min(2, "Должно быть не менее двух букв")
                        .max(30, "Слишком длинное имя")
                        .trim()
                        .matches(/^\D*$/, "Не должно содержать цифр")
                        .matches(
                            /^[a-zA-Zа-яА-ЯёЁ]+(-[a-zA-Zа-яА-ЯёЁ]+)?$/,
                            "Может содержать только буквы и не более одного дефиса. Не может оканчиваться дефисом"
                        ),
                    last_name: Yup.string()
                        .min(2, "Должно быть не менее двух букв")
                        .max(30, "Слишком длинная фамилия")
                        .trim()
                        .matches(/^\D*$/, "Не должно содержать цифр")
                        .matches(
                            /^[a-zA-Zа-яА-ЯёЁ]+(-[a-zA-Zа-яА-ЯёЁ]+)?$/,
                            "Может содержать только буквы и не более одного дефиса. Не может оканчиваться дефисом"
                        ),
                    phone_number: Yup.string().test({
                        name: "phone_number",
                        message: "Некорректный номер телефона",
                        test: (value) => {
                            if (value !== undefined) {
                                return isPossiblePhoneNumber(value);
                            }
                        },
                    }),
                })}
                onSubmit={(values) => {
                    const requestValues = {
                        first_name: values.first_name || undefined,
                        last_name: values.last_name || undefined,
                        phone_number: values.phone_number || undefined,
                    };

                    changeDataUser({ requestValues, token }).then(router.reload);
                }}
            >
                {({ isSubmitting, errors, touched, isValid, setFieldTouched }) => {
                    return (
                        <Form>
                            <FirstNameInput errors={errors} touched={touched} />
                            <LastNameInput errors={errors} touched={touched} />
                            <PhoneInput errors={errors} touched={touched} />
                            <div className={css.btn}>
                                <ButtonLogin type="submit" disabled={isSubmitting} active={isValid}>
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
