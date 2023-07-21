import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field,FormikErrors, FormikTouched, useFormikContext } from "formik";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import css from "../css/login.module.css";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

const initialValues = {
     password: ""
};

type DefaultPasswordError = FetchBaseQueryError & {
    data?: {
        detail?: string[]
    }
}

type PasswordErrors = FetchBaseQueryError | SerializedError

function isDefaultPasswordError(error?: PasswordErrors): error is DefaultPasswordError {
     return (error as DefaultPasswordError)?.data?.detail !== undefined;
}

interface PropsPasswordInput {
     errors: FormikErrors<{password: string}>;
     touched: FormikTouched<{password: string}>;
     error?: FetchBaseQueryError | SerializedError;
}

const passwordErrorMap: Record<string, string> = {
     "No active account found with the given credentials": "Почтовый адрес или пароль не верны",
};

export const PasswordInput: FC<PropsPasswordInput> = ({errors, touched, error }) => {

     const [openEye, setEye] = useState<string>("password");
     const openAndClose = () => {
          if(openEye === "password") {
               setEye("text");
          }
          if(openEye === "text") {
               setEye("password");
          }
     };

     const {setFieldError} = useFormikContext<typeof initialValues>();

     useEffect(() => {
          if(isDefaultPasswordError(error)) {
               const errorKey = String(error?.data?.detail);
               const errorMessage = passwordErrorMap[errorKey] || "Произошла ошбика";
               setFieldError("password", errorMessage);
          }
     }, [error]);

     return(
          <div className={css.blockInput}>
               <label htmlFor="password">
                    <Text type="reg18" color="black">Пароль</Text>
               </label>
               <div className={css.errorIcon}>
                    {errors.password && touched.password && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
               </div>
               <div className={css.groupStateEye}>
                    <Field type={openEye} name="password" placeholder="Придумайте пароль" className={errors.password && touched.password ? `${css.inputError}` : `${css.input}`}/>
                    <div className={css.stateEye}>
                         {openEye === "text" && <Image src="/sign/closePassword.svg" width={24} height={24} alt="stateEye" onClick={openAndClose}/>}
                         {openEye === "password" && <Image src="/sign/openPassword.svg" width={24} height={24} alt="stateEye" onClick={openAndClose}/>}
                    </div>
                    
               </div>
               <div className={css.error}>
                    <Text type="reg16" color="red">
                         <ErrorMessage name="password"/>
                    </Text>
               </div>
          </div>
     );
};