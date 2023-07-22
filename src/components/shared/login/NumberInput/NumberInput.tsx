import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import Image from "next/image";
import { FC } from "react";
import css from "../css/login.module.css";

interface PropsNumberInput {
     errors: FormikErrors<{number: string}>;
     touched: FormikTouched<{number: string}>;
}

export const NumberInput: FC<PropsNumberInput> = ({errors, touched}) => {
     return(
          <div className={css.blockInput}>
               <label htmlFor="number">
                    <Text type="reg18" color="black">Телефон</Text>
               </label>
               <div className={css.errorIcon}>
                    {errors.number && touched.number && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
               </div>
               <div>
                    <Field type="text" name="number" placeholder="+375293142411" className={errors.number && touched.number ? `${css.inputError}` : `${css.input}`}/>
               </div>
               <div className={css.error}>
                    <Text type="reg16" color="red">
                         <ErrorMessage name="number"/>
                    </Text>
               </div>
              
          </div>
     );
};