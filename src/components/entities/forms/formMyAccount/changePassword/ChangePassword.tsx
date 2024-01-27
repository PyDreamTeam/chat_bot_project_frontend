import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/FormMyAccount.module.css";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import Image from "next/image";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { ChangeNewPasswordInput } from "@/src/components/shared/login/ChangeNewPasswordInput/ChangeNewPasswordInput";
import { ReChangeNewPasswordInput } from "@/src/components/shared/login/ReChangeNewPasswordInput/ReChangeNewPasswordInput";
import { ButtonLogin } from "@/src/components/shared/buttons/ButtonLogin";
import { PasswordInput } from "@/src/components/shared/login/PasswordInput/PasswordInput";
import { useSetPasswordMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

const err = {
    min: "Содержит не менее 8 символов",
    string: "Содержит как строчные (a–z), так и прописные буквы (A–Z)",
    number: "Содержит по крайней мере одну цифру (0–9)",
    special: "Содержит по крайней мере один спецсимвол",
    req: "Введите пароль",
};

const ChangePassword = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();

    const [setPassword, { isSuccess, error: errorData, isLoading }] = useSetPasswordMutation();

    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const handleToggleSuccessModal = () => {
        setIsSuccessModal(!isSuccessModal);
    };
    const [isErrorModal, setIsErrorModal] = useState<boolean>(false);
    const handleToggleErrorModal = () => {
        setIsErrorModal(!isErrorModal);
    };

    useEffect(() => {
        if (isSuccess) {
            setIsSuccessModal(true);
            setTimeout(() => {
                setIsSuccessModal(false);
                // router.push("/my-account/profile/personal-data/");
            }, 5000);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (errorData) {
            setIsErrorModal(true);
            setTimeout(() => {
                setIsErrorModal(false);
            }, 5000);
        }
    }, [errorData]);

    return (
        <div className={styles.changePasswordBlock}>
            <Title color={"black"} type={"h5"}>
                Изменить пароль
            </Title>
            {isLoading ? (
                <div className={styles.loaderOrders}>
                    <Loader isLoading={isLoading} />
                </div>
            ) : (
                <>
                    <Formik
                        initialValues={{
                            password: "",
                            new_password: "",
                            re_new_password: "",
                        }}
                        validationSchema={Yup.object().shape({
                            password: Yup.string()
                                .min(8, err.min)
                                .max(50, "Не более 50 символов")
                                .matches(/(?=.*[a-z])(?=.*[A-Z])/, err.string)
                                .matches(/^(?=.*[0-9])/, err.number)
                                .matches(/^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\])/, err.special)
                                .required(err.req),
                            new_password: Yup.string()
                                .min(8, err.min)
                                .max(50, "Не более 50 символов")
                                .matches(/(?=.*[a-z])(?=.*[A-Z])/, err.string)
                                .matches(/^(?=.*[0-9])/, err.number)
                                .matches(/^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\])/, err.special)
                                .required(err.req),
                            re_new_password: Yup.string()
                                .required("Подтвердите пароль")
                                .oneOf([Yup.ref("new_password")], "Указанные пароли должны быть идентичными"),
                            uid: Yup.string(),
                            token: Yup.string(),
                        })}
                        onSubmit={(values) => {
                            const requestValues = {
                                current_password: values.password || undefined,
                                new_password: values.new_password || undefined,
                                re_new_password: values.re_new_password || undefined,
                            };

                            setPassword({ requestValues, token })
                                .unwrap()
                                .catch((errorData) => {
                                    if (errorData.data.current_password[0] == "Invalid password.") {
                                        console.log("Invalid password");
                                    }
                                });
                        }}
                    >
                        {({ errors, touched, isValid, getFieldProps }) => {
                            const dataPassword = getFieldProps("new_password");
                            const password = dataPassword.value;

                            return (
                                <Form>
                                    <PasswordInput errors={errors} touched={touched} />
                                    <ChangeNewPasswordInput errors={errors} touched={touched} password={password} />
                                    <ReChangeNewPasswordInput errors={errors} touched={touched} />
                                    <ButtonLogin disabled={false} active={isValid} type="submit">
                                        Обновить пароль
                                    </ButtonLogin>
                                </Form>
                            );
                        }}
                    </Formik>
                </>
            )}
            {isSuccessModal && (
                <div className={styles.backdrop}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <Image
                                src="/sign/close.svg"
                                alt="icon"
                                width={34}
                                height={34}
                                className={styles.imgCloseModal}
                                onClick={handleToggleSuccessModal}
                                style={{ cursor: "pointer" }}
                            />
                            <Image src={"/platforms/successModal.svg"} alt="icon" width={120} height={120} />
                            <div className={styles.textSuccess}>
                                <Title type="h5" color="black">
                                    Пароль успешно изменен!
                                </Title>
                                <Text type="reg16" color="grey">
                                    Установлен новый пароль для пользователя
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isErrorModal && (
                <div className={styles.backdrop}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <Image
                                src="/sign/close.svg"
                                alt="icon"
                                width={34}
                                height={34}
                                className={styles.imgCloseModal}
                                onClick={handleToggleErrorModal}
                                style={{ cursor: "pointer" }}
                            />
                            <Image src={"/img/ImageErrorForm.svg"} alt="icon" width={120} height={120} />
                            <div className={styles.textSuccess}>
                                <Title type="h5" color="black">
                                    Неверный пароль!
                                </Title>
                                <Text type="reg16" color="grey">
                                    Существующий пароль был введён неверно
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChangePassword;
