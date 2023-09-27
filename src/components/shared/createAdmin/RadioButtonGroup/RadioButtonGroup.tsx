import { FC } from "react";
import css from "../styles/createAdmin.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";

interface PropsRadioButtonGroup {
    name?: string;
    values?: Array<string>;
    errors: FormikErrors<{ role: string }>;
    touched: FormikTouched<{ role: string }>;
    label: string;

}
export const RadioButtonGroup: FC<PropsRadioButtonGroup> = ({
    errors,
    touched,
    label,
    name,
    values
}) => {

    return (
        <div className={css.blockInput}>
            <label htmlFor="role">
                <Text type="reg18" color="black">
                    {label}
                </Text>
            </label>
            <div className={css.errorIcon}>
                {errors.role && touched.role && (
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                )}
            </div>
            <div className={css.radio}>
                {values?.map((value) => (
                    <label key={value}><Field type="radio" name={name} value={value} />
                        {value}</label>
                ))}
            </div>
            <div className={css.error}>
                <Text type="reg16" color="red">
                    <ErrorMessage name="role" />
                </Text>
            </div>
        </div>
    );
};