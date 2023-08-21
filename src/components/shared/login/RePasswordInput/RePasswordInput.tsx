import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import { FC, useState } from "react";
import css from "../css/login.module.css";

interface PropsRePasswordInput {
    errors: FormikErrors<{ re_password: string }>;
    touched: FormikTouched<{ re_password: string }>;
}

export const RePasswordInput: FC<PropsRePasswordInput> = ({ errors, touched }) => {
    const [openEye, setEye] = useState<string>("password");
    const openAndClose = () => {
        if (openEye === "password") {
            setEye("text");
        }
        if (openEye === "text") {
            setEye("password");
        }
    };

    return (
        <div className={css.blockInput}>
            <label htmlFor="re_password">
                <Text type="reg18" color="black">
                    Подтверждение пароля
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.re_password && touched.re_password && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div className={css.groupStateEye}>
                <Field
                    type={openEye}
                    name="re_password"
                    placeholder="Повторите пароль"
                    className={errors.re_password && touched.re_password ? `${css.inputError}` : `${css.input}`}
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
                    <ErrorMessage name="re_password" />
                </Text>
            </div>
        </div>
    );
};
