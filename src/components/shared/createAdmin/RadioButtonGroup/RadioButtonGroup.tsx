import { FC } from "react";
import css from "../styles/createAdmin.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";

type Role = "AD" | "MN";
interface PropsRadioButtonGroup {
    name?: string;
    values: Array<Role>;
    errors: FormikErrors<{ user_role: string }>;
    touched: FormikTouched<{ user_role: string }>;
    label: string;
}

export const Roles = { AD: "Администратор", MN: "Модератор" };

export const RadioButtonGroup: FC<PropsRadioButtonGroup> = ({
    errors,
    touched,
    label,
    name,
    values
}) => {

    return (
        <div className={css.blockInput}>
            <label htmlFor="user_role">
                <Text type="reg18" color="black">
                    {label}
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.user_role && touched.user_role && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div className={css.radio}>
                <label><Field type="radio" name={name} value={values[0]} />
                    {Roles[values[0]]}</label>
                <label><Field type="radio" name={name} value={values[1]} />
                    {Roles[values[1]]}</label>
            </div>
            <div className={css.error}>
                <Text type="reg16" color="red">
                    <ErrorMessage name="user_role" />
                </Text>
            </div>
        </div>
    );
};