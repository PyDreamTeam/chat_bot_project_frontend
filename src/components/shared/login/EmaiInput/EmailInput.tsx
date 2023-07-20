import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikTouched, useFormikContext } from "formik";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import css from "../css/login.module.css";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

const initialValues = {
     email: ""
};

type DefaultEmailError = FetchBaseQueryError & {
    data?: {
         email?: string[]
    }
}

type EmailErrors = FetchBaseQueryError | SerializedError

function isDefaultEmailError(error?: EmailErrors): error is DefaultEmailError {
     return (error as DefaultEmailError).data?.email !== undefined;
}

interface PropsFirstNameInput {
     errors: FormikErrors<{email: string}>;
     touched: FormikTouched<{email: string}>;
     error?: FetchBaseQueryError | SerializedError
}

const emailErrorMap: Record<string, string> = {
     "Incorrect email": "Неправильный email"
};

export const EmailInput: FC<PropsFirstNameInput> = ({errors, touched, error}) => {

     const {setFieldError} = useFormikContext<typeof initialValues>();

     useEffect(() => {
          if(isDefaultEmailError(error)) {
               const errorKey = String(error?.data?.email?.[0]);
               const errorMessage = emailErrorMap[errorKey] || "Произошла ошбика";
               setFieldError("email", errorMessage);
          }
     }, []);

     return(
          <div className={css.blockInput}>
               <label htmlFor="email">
                    <Text type="reg18" color="black">E-mail</Text>
               </label>
               <div className={css.errorIcon}>
                    {errors.email && touched.email && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
               </div>
               <div>
                    <Field type="email" name="email" placeholder="example@gmail.com" className={errors.email && touched.email ? `${css.inputError}` : `${css.input}`}/>
               </div>
               <div className={css.error}>
                    <Text type="reg16" color="red">
                         <ErrorMessage name="email"/>
                    </Text>
               </div>
              
          </div>
     );
};