import React, { FC, useEffect, useRef } from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import Cookies from "js-cookie";
import styles from "./styles/order.module.css";
import { useDeleteOrderMutation, useGetOrderQuery, usePutOrderMutation } from "@/src/store/services/userAuth";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { FirstNameInput } from "@/src/components/shared/login/FirstNameInput/FirstNameInput";
import { EmailInput } from "@/src/components/shared/login/EmaiInput/EmailInput";
import { PhoneInput } from "@/src/components/shared/login/PhoneNumberInput/PnoneInput";
import { CommentInput } from "@/src/components/shared/login/CommentInput/CommentInput";
import { Button } from "@/src/components/shared/buttons/Button";
import Image from "next/image";

interface pageProps {
    params: { id: string };
}

const page: FC<pageProps> = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const orderId: string = router.query.id as string;
    const id = orderId;
    const [putOrder, { isSuccess, error: errorData, isLoading }] = usePutOrderMutation();
    const [deleteOrder, { error: errorDelete }] = useDeleteOrderMutation();
    const { data: dataOrder, isLoading: isLoadingOrder } = useGetOrderQuery(
        { token, id },
        {
            refetchOnMountOrArgChange: true,
        }
    );
    // TODO: type error in formRef.current.handleSubmit();
    const formRef: any = useRef(null);

    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    };

    return (
        <AccountPageWrapper page="orderEdit" orderNumber={orderId} submitForm={handleSubmit}>
            <div className={styles.orderEditWrapper}>
                {isLoadingOrder ? (
                    <div className={styles.loaderOrders}>
                        <Loader isLoading={isLoadingOrder} />
                    </div>
                ) : (
                    <div className={styles.orderEditWrapper}>
                        <Formik
                            enableReinitialize={true}
                            innerRef={formRef}
                            initialValues={{
                                first_name: dataOrder?.first_name || "",
                                email: dataOrder?.email || "",
                                phone_number: dataOrder?.phone_number || "",
                                comment: dataOrder?.comment || "",
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
                                const id = orderId;
                                if (dataOrder) {
                                    putOrder({ requestValues, token, id })
                                        .then((response) => {
                                            // response ? startCloseTimer() : null;
                                            formikBag.setSubmitting(false);
                                        })
                                        .then(() => router.push("/my-account/orders"))
                                        .catch((error) => {
                                            console.error(error);
                                        });
                                }
                            }}
                        >
                            {({ isSubmitting, errors, touched, isValid, setFieldTouched }) => {
                                useEffect(() => {
                                    if (dataOrder) {
                                        setFieldTouched("first_name");
                                        setFieldTouched("email");
                                        setFieldTouched("phone_number");
                                        setFieldTouched("comment");
                                    }
                                }, [dataOrder]);

                                return (
                                    <Form className={styles.form} onSubmit={handleSubmit}>
                                        <FirstNameInput errors={errors} touched={touched} />
                                        <EmailInput errors={errors} touched={touched} />
                                        <PhoneInput errors={errors} touched={touched} />
                                        <CommentInput errors={errors} touched={touched} />
                                        <Button
                                            disabled={isSubmitting}
                                            active={isValid}
                                            type={"submit"}
                                            onClick={handleSubmit}
                                        >
                                            Отправить
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <Image
                            src="/img/Order_edit.svg"
                            alt="edit"
                            width={404}
                            height={380}
                            className={styles.imgEdit}
                        />
                    </div>
                )}
            </div>
        </AccountPageWrapper>
    );
};

export default page;
