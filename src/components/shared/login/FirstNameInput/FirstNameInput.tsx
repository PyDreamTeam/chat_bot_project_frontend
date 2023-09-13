import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched, FormikValues } from "formik";
import Image from "next/image";
import { FC } from "react";
import css from "../css/login.module.css";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

interface PropsFirstNameInput {
    errors: FormikErrors<{ first_name: string }>;
    touched: FormikTouched<{ first_name: string }>;
}

export const FirstNameInput: FC<PropsFirstNameInput> = ({ errors, touched}) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);
    
    return (
        <div className={css.blockInput}>
            <label htmlFor="first_name">
                <Text type="reg18" color="black">
                    Имя
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.first_name && touched.first_name && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div>
                <Field
                    type="text"
                    name="first_name"
                    placeholder={data ? data?.first_name : "Иван"}
                    className={
                        errors.first_name 
                        ? touched.first_name 
                        ? `${css.inputError}` 
                        : `${css.input}`
                        : touched.first_name
                        ? `${css.inputValid}`
                        : `${css.input}`
                    }           
                />
            </div>
            <div className={css.error}>
                <Text type="reg16" color="red">
                    <ErrorMessage name="first_name" />
                </Text>
            </div>
        </div>
    );
};
