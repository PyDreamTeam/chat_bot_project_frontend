import { FC, useEffect, useRef } from "react";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";
import styles from "./styles/SelectionRequest.module.css";
import { FirstNameInput } from "../../shared/login/FirstNameInput/FirstNameInput";
import { EmailInput } from "../../shared/login/EmaiInput/EmailInput";
import { CommentInput } from "../../shared/login/CommentInput/CommentInput";
import { Button } from "../../shared/buttons/Button";
import {
    useChangeDataUserMutation,
    useCreateOrderMutation,
    useCreateOrderUnregisteredMutation,
    useDataUserQuery,
} from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { error } from "console";
import { PhoneInput } from "../../shared/login/PhoneNumberInput/PnoneInput";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { ButtonCancel } from "../../shared/buttons/ButtonCancel";
import { useRouter } from "next/router";

interface IPropsRequest {
    open?: () => void;
    close?: () => void;
    dataComment?: string;
    forceUpdate?: () => void;
}

// TODO: unhandled server errors?

const SelectionRequest: FC<IPropsRequest> = ({ close, open, dataComment, forceUpdate }) => {
    const [createOrder, { isSuccess, error: errorData, isLoading }] = useCreateOrderMutation();
    const [createOrderUnregistered, { isSuccess: isSuccessAnonym }] = useCreateOrderUnregisteredMutation();
    const [changeDataUser, { isSuccess: isSuccessChange, isLoading: isLoadingChange }] = useChangeDataUserMutation();
    const [openPhoneSaver, setOpenPhoneSaver] = useState(false);
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const tokenAccess = token.access;
    const { data } = useDataUserQuery(token);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

    const startCloseTimer = () => {
        timerRef.current = setTimeout(() => {
            if (data?.phone_number) {
                close?.();
            } else {
                setOpenPhoneSaver(true);
                setTimeout(() => close?.(), 4000);
            }
        }, 3000);
    };

    useEffect(() => {
        return () => clearTimeout(timerRef.current as NodeJS.Timeout);
    }, []);

    return (
        <div>
            {!(isSuccess || isSuccessAnonym) ? (
                <div className={styles.container}>
                    <div className={styles.backGround}>
                        <div className={styles.logoWrapper}>
                            <Logo variant={LogoVariantProps.header} />
                            <div className={styles.blockBlue}>
                                <ElemChooseChatBot variant={ElemVariantProps.auth} text="конструктор чат-ботов" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <Image
                            src="/sign/close.svg"
                            alt="close"
                            width={34}
                            height={34}
                            onClick={close}
                            className={styles.imgClose}
                        />
                        <Title type="h4" color="black">
                            Заявка
                        </Title>
                        <Formik
                            initialValues={{
                                first_name: data?.first_name || "",
                                email: data?.email || "",
                                phone_number: data?.phone_number || "",
                                comment: dataComment || "",
                            }}
                            validationSchema={Yup.object().shape({
                                first_name: Yup.string()
                                    .required("Поле обязательное для заполнения. Введите имя")
                                    .min(2, "Содержит две или более букв")
                                    .matches(/^\D*$/, "Не должно содержать цифр"),
                                email: Yup.string()
                                    .email("Некорректный email")
                                    .required("Поле обязательное для заполнения. Введите email"),
                                phone_number: Yup.string()
                                    .test({
                                        name: "phone_number",
                                        message: "Некорректный номер телефона",
                                        test: (value) => {
                                            if (value !== undefined) {
                                                return isPossiblePhoneNumber(value);
                                            }
                                        },
                                    })
                                    .required("Поле обязательное для заполнения"),
                                comment: Yup.string()
                                    .min(5, "Введено 0/5 символов")
                                    .max(200, "Текст (от 5 до 200 символов)")
                                    .required("Введено 0/5 символов"),
                            })}
                            onSubmit={(values, formikBag) => {
                                const requestValues = {
                                    first_name: values.first_name || undefined,
                                    email: values.email || undefined,
                                    phone_number: values.phone_number || undefined,
                                    comment: values.comment || undefined,
                                };
                                if (data) {
                                    createOrder({ requestValues, token })
                                        .then((response) => {
                                            response ? startCloseTimer() : null;
                                            Cookies.set("Order_phone", `${requestValues.phone_number}`);
                                            setTimeout(() => Cookies.set("Order_phone", ""), 10000);
                                            formikBag.setSubmitting(false);
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                        });
                                } else {
                                    createOrderUnregistered(requestValues)
                                        .then((response) => {
                                            response ? startCloseTimer() : null;
                                            formikBag.setSubmitting(false);
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                        });
                                }
                            }}
                        >
                            {({ isSubmitting, errors, touched, getFieldProps, isValid, setFieldTouched }) => {
                                useEffect(() => {
                                    if (data) {
                                        setFieldTouched("first_name");
                                        setFieldTouched("email");
                                    }
                                    if (data?.phone_number) {
                                        setFieldTouched("phone_number");
                                    }
                                    if (dataComment) {
                                        setFieldTouched("comment");
                                    }
                                }, [data]);

                                return (
                                    <Form className={styles.form}>
                                        <FirstNameInput errors={errors} touched={touched} />
                                        <EmailInput errors={errors} touched={touched} />
                                        <PhoneInput errors={errors} touched={touched} />
                                        <CommentInput errors={errors} touched={touched} />
                                        <Button disabled={isSubmitting} active={isValid} type={"submit"}>
                                            Отправить
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            ) : !openPhoneSaver ? (
                <div className={styles.containerSuccess}>
                    <Image
                        src="/sign/close.svg"
                        alt="close"
                        width={34}
                        height={34}
                        onClick={() => {
                            if (!data?.email) {
                                close?.();
                            } else if (data?.phone_number) {
                                close?.();
                            } else {
                                setOpenPhoneSaver(true);
                            }
                        }}
                        className={styles.imgClose}
                    />
                    <Image
                        src="/img/ep_success-filled.svg"
                        alt="imgSuccess"
                        width={120}
                        height={120}
                        className={styles.imgSuccess}
                    />
                    <div className={styles.textSuccess}>
                        <Title type="h5" color="black">
                            Заявка успешно отправлена!
                        </Title>
                        <Text type="reg16" color="grey">
                            Наши специалисты свяжутся с вами в течение суток
                        </Text>
                    </div>
                </div>
            ) : (
                <div className={styles.containerPhoneSaver}>
                    <Image
                        src="/sign/close.svg"
                        alt="close"
                        width={34}
                        height={34}
                        onClick={() => {
                            Cookies.set("Order_phone", "");
                            close?.();
                        }}
                        className={styles.imgClose}
                    />
                    <Image
                        src="/icon/Phone-add.svg"
                        alt="imgSuccess"
                        width={56}
                        height={56}
                        className={styles.imgSuccess}
                    />
                    <div className={styles.textBlock}>
                        <Text type="med20" color="black">
                            Сохранить указанный номер телефона в личный кабинет?
                        </Text>
                        <Text type="med20" color="grey">
                            {`${Cookies.get("Order_phone")}`}
                        </Text>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <ButtonCancel
                            type={"button"}
                            active={true}
                            onClick={() => {
                                Cookies.set("Order_phone", "");
                                close?.();
                            }}
                            width={240}
                        >
                            Отмена
                        </ButtonCancel>
                        <Button
                            type={"button"}
                            active={true}
                            onClick={() => {
                                const savedPhone = Cookies.get("Order_phone") || "";
                                Cookies.set("Saved_phone", savedPhone);
                                const requestValues = {
                                    phone_number: savedPhone,
                                };
                                const token = tokenAccess;
                                changeDataUser({ requestValues, token }).then(router.reload);
                                close?.();
                            }}
                            width={240}
                        >
                            Сохранить
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectionRequest;
