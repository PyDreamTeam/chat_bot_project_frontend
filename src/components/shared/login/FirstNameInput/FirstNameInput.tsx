import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched, FormikValues } from "formik";
import Image from "next/image";
import { FC } from "react";
import css from "../css/login.module.css";

interface PropsFirstNameInput {
     errors: FormikErrors<{ first_name: string }>;
     touched: FormikTouched<{ first_name: string }>;
     value?: string;
}

export const FirstNameInput: FC<PropsFirstNameInput> = ({ errors, touched, value }) => {
     return (
          <div className={css.blockInput}>
               <label htmlFor="first_name">
                    <Text type="reg18" color="black">
                         Имя
                    </Text>
               </label>
               <div className={css.errorIcon}>
                    {errors.first_name && touched.first_name && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
               </div>
               <div>
                    <Field
                         type="text"
                         name="first_name"
                         placeholder="Иван"
                         value={value}
                         className={errors.first_name && touched.first_name ? `${css.inputError}` : `${css.input}`}
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
