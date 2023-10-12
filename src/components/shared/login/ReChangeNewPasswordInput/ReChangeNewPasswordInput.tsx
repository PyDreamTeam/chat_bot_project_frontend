import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched, useFormikContext } from "formik";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import css from "../css/login.module.css";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ErrorsPassword } from "@/src/components/entities/errorsPassword/ErrorsPassword";

const initialValues = {
    re_new_password: "",
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
    errors: FormikErrors<{ re_new_password: string }>;
    touched: FormikTouched<{ re_new_password: string }>;
    error?: FetchBaseQueryError | SerializedError;
}

const newPasswordErrorMap: Record<string, string> = {
    "The password is too similar to the email.": "Email и пароль совпадают",
};

export const ReChangeNewPasswordInput: FC<PropsNewPasswordInput> = ({ errors, touched, error }) => {
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
            setFieldError("re_new_password", errorMessage);
        }
    }, [error]);

    return (
        <div className={css.blockInput}>
            <label htmlFor="re_new_password">
                <Text type="reg18" color="black">
                    Повторите пароль
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.re_new_password && touched.re_new_password && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div className={css.groupStateEye}>
                <Field
                    type={openEye}
                    name="re_new_password"
                    placeholder="Повторите новый пароль"
                    className={errors.re_new_password && touched.re_new_password ? `${css.inputError}` : `${css.input}`}
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
                    <ErrorMessage name="re_new_password" />
                </Text>
            </div>
        </div>
    );
};
