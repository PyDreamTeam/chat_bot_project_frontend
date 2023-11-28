import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import styles from "./FooterRightBlock.module.css";
import Text from "@/src/components/shared/text/Text";
import { EmailEngRegExp } from "@/src/shared/constants/regExps";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ButtonEmail } from "@/src/components/shared/buttons/ButtonEmail";

const FooterRightBlock = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { isSuccess } = useDataUserQuery(token);
    const router = useRouter();

    const onClick = () => {
        if (!isSuccess) {
            router.push("/sign-in");
        } else {
            router.push("mailto:kuksa.nastya64@yandex.by");
        }
    };

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("Введите электронную почту")
            .matches(EmailEngRegExp, "Электронная почта неверна")
            .max(30, "Не более 30 символов"),
    });

    return (
        <div className={styles.footerRightContainer}>
            <Text type={"reg16"} color={"white"} className={styles.footerInfo}>
                Подписаться на портал о мессенджер-<br></br>маркетинге и чат-ботах
            </Text>
            <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={() => {
                    console.log("send email");
                }}
            >
                {({ errors, values, touched, handleSubmit, isValid, isSubmitting }) => (
                    <Form name="contact" method="post" onSubmit={handleSubmit}>
                        <div className={styles.footerInputBlock}>
                            <label htmlFor="email"></label>
                            <Field
                                className={
                                    errors.email || touched.email
                                        ? `${styles.inputError}`
                                        : `${styles.inputFieldFooter}`
                                }
                                placeholder={"Введите E-mail"}
                                name={"email"}
                                htmlFor={"email"}
                                value={values.email}
                            />
                            <Text type="reg16" color="red">
                                <ErrorMessage name="email" />
                            </Text>
                        </div>

                        <ButtonEmail
                            active={isValid}
                            type="submit"
                            disabled={!isValid || values.email.trim().length === 0}
                            onClick={() => {
                                onClick();
                            }}
                        >
                            <span>Подписаться</span>
                        </ButtonEmail>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FooterRightBlock;
