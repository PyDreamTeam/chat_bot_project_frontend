import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched, useFormikContext } from "formik";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import css from "../css/login.module.css";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ErrorsPassword } from "@/src/components/entities/errorsPassword/ErrorsPassword";

const initialValues = {
    new_password: "",
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

interface PropsNewPasswordInput {
    errors: FormikErrors<{ new_password: string }>;
    touched: FormikTouched<{ new_password: string }>;
    error?: FetchBaseQueryError | SerializedError;
    password: string;
}

const newPasswordErrorMap: Record<string, string> = {
    "The password is too similar to the email.": "Email и пароль совпадают",
};

export const ChangeNewPasswordInput: FC<PropsNewPasswordInput> = ({ errors, touched, error, password }) => {
    const [openEye, setEye] = useState<string>("password");
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
            setFieldError("new_password", errorMessage);
        }
    }, [error]);

    return (
        <div className={css.blockInput}>
            <label htmlFor="new_password">
                <Text type="reg18" color="black">
                    Новый пароль
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.new_password && touched.new_password && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div className={css.groupStateEye}>
                <Field
                    type={openEye}
                    name="new_password"
                    placeholder="Введите новый пароль"
                    className={errors.new_password && touched.new_password ? `${css.inputError}` : `${css.input}`}
                />
                <div className={css.stateEye}>
                    {openEye === "text" && (
                        <Image
                            src="/sign/closePassword.svg"
                            width={24}
                            height={24}
                            alt="stateEye"
                            onClick={openAndClose}
                        />
                    )}
                    {openEye === "password" && (
                        <Image
                            src="/sign/openPassword.svg"
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
                    <ErrorMessage name="new_password" />
                </Text>
            </div>
            {touched.new_password && (
                <div className={css.errorsBlock}>
                    <ErrorsPassword password={password} />
                </div>
            )}
        </div>
    );
};
