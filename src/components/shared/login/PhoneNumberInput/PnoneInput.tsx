import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import { FC } from "react";
import css from "../css/login.module.css";
import PhoneInputField from "./PhoneInputField";

interface PropsPhoneInput {
    errors: FormikErrors<{ phone_number: string }>;
    touched: FormikTouched<{ phone_number: string }>;
}

export const PhoneInput: FC<PropsPhoneInput> = ({ errors, touched }) => {
    return (
        <div className={css.blockInput}>
            <label htmlFor="phone_number">
                <Text type="reg18" color="black">
                    Телефон
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.phone_number && touched.phone_number && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div className={css.phoneInputWrapper}>
                <PhoneInputField
                    name="phone_number"
                    type="text"
                    placeholder="Write your phone number here"
                    className={
                        errors.phone_number
                            ? touched.phone_number
                                ? `${css.inputError}`
                                : `${css.input}`
                            : touched.phone_number
                            ? `${css.inputValid}`
                            : `${css.input}`
                    }
                />
            </div>
            <div className={css.error}>
                <Text type="reg16" color="red">
                    <ErrorMessage name="phone_number" />
                </Text>
            </div>
        </div>
    );
};
