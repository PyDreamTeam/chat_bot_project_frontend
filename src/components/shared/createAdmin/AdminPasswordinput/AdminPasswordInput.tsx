import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched, useFormikContext } from "formik";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import css from "../styles/createAdmin.module.css";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ErrorsPassword } from "@/src/components/entities/errorsPassword/ErrorsPassword";

const initialValues = {
    password: "",
};

type DefaultNewPasswordError = FetchBaseQueryError & {
    data?: {
        password?: string[];
    };
};

type NewPasswordErrors = FetchBaseQueryError | SerializedError;

function isDefaultNewPasswordError(error?: NewPasswordErrors): error is DefaultNewPasswordError {
    return (error as DefaultNewPasswordError)?.data?.password !== undefined;
}

interface PropsAdminPasswordInput {
    errors: FormikErrors<{ password: string }>;
    touched: FormikTouched<{ password: string }>;
    error?: FetchBaseQueryError | SerializedError;
}

const newPasswordErrorMap: Record<string, string> = {
    "The password is too similar to the email.": "Email и пароль совпадают",
};

export const AdminPasswordInput: FC<PropsAdminPasswordInput> = ({ errors, touched, error }) => {
    const [openEye, setEye] = useState<string>("text");
    const openAndClose = () => {
        if (openEye === "password") {
            setEye("text");
        }
        if (openEye === "text") {
            setEye("password");
        }
    };

    const { setFieldError } = useFormikContext<typeof initialValues>();

    useEffect(() => {
        if (isDefaultNewPasswordError(error)) {
            const errorKey = String(error?.data?.password?.[0]);
            const errorMessage = newPasswordErrorMap[errorKey] || "Произошла ошбика";
            setFieldError("password", errorMessage);
        }
    }, [error]);

    return (
        <div className={css.blockInput}>
            <label htmlFor="password">
                <Text type="reg18" color="black">
                    Пароль по умолчанию
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.password && touched.password && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div className={css.groupStateEye}>
                <Field
                    type={openEye}
                    name="password"
                    placeholder="Придумайте пароль"
                    className={`${css.inputDisabled} ${css.inputValid}`}
                />
                <div className={css.stateEye}>
                    {openEye === "text" && (
                        <Image
                            src="/sign/openPassword.svg"
                            width={24}
                            height={24}
                            alt="stateEye"
                            onClick={openAndClose}
                        />
                    )}
                    {openEye === "password" && (
                        <Image
                            src="/sign/closePassword.svg"
                            width={24}
                            height={24}
                            alt="stateEye"
                            onClick={openAndClose}
                        />
                    )}
                </div>
            </div>
            <div className={css.error}>
                <Text type="reg16" color="red">
                    <ErrorMessage name="password" />
                </Text>
            </div>
        </div>
    );
};
