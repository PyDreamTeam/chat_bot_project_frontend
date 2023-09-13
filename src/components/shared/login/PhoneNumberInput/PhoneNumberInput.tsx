import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import { FC } from "react";
import css from "../css/login.module.css";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

interface PropsPhoneNumberInput {
    errors: FormikErrors<{ phone_number: string }>;
    touched: FormikTouched<{ phone_number: string }>;
}

export const PhoneNumberInput: FC<PropsPhoneNumberInput> = ({ errors, touched }) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

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
            <div>
                <Field
                    type="text"
                    name="phone_number"
                    placeholder={data?.phone_number ? data?.phone_number  : "Введите номер телефона"}
                    className={errors.phone_number && touched.phone_number ? `${css.inputError}` : `${css.input}`}
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
