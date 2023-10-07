import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import { FC } from "react";
import css from "../css/login.module.css";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

interface PropsLastNameInput {
    errors: FormikErrors<{ last_name: string }>;
    touched: FormikTouched<{ last_name: string }>;
}

export const LastNameInput: FC<PropsLastNameInput> = ({ errors, touched }) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

    return (
        <div className={css.blockInput}>
            <label htmlFor="last_name">
                <Text type="reg18" color="black">
                    Фамилия
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.last_name && touched.last_name && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div>
                <Field
                    type="text"
                    name="last_name"
                    placeholder={data ? data.last_name : "Иванов"}
                    className={
                        errors.last_name
                            ? touched.last_name
                                ? `${css.inputError}`
                                : `${css.input}`
                            : touched.last_name
                                ? `${css.inputValid}`
                                : `${css.input}`}
                />
            </div>
            <div className={css.error}>
                <Text type="reg16" color="red">
                    <ErrorMessage name="last_name" />
                </Text>
            </div>
        </div>
    );
};
