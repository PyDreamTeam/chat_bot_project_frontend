import {FC, useEffect} from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Text from "../../shared/text/Text";
import Image from "next/image";
import { Button } from "../../shared/buttons/Button";
import css from "./dataForm.module.css";
import { useChangeDataUserMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";


interface PropsDataForm {
    schema: {
        htmlFor: string
        label: string
        type: string
        name: "first_name" | "last_name" | "number";
        placeholder: string
   }[],
}

export const DataForm: FC<PropsDataForm> = ({schema = []}) => {

     const router = useRouter();
     const [changeDataUser, {isSuccess}] = useChangeDataUserMutation();
     const tk = JSON.parse(Cookies.get("loginUser") || "[]");
     const token = tk.access;

     useEffect(() => {
          if(isSuccess) {
               router.reload();
          }
     }, [isSuccess]);

     return(
          <div>
               <Formik
                    initialValues={{
                         first_name: "",
                         last_name: "",
                         number: ""
                    }}
                    validationSchema={Yup.object().shape({
                         first_name: Yup.string().min(2, "Должно быть не менее двух букв").max(30, "Слишком длинное имя"),
                         last_name: Yup.string().min(2, "Должно быть не менее двух букв").max(100, "Слишком длинная фамилия"),
                         number: Yup.string()
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                         setTimeout(() => {
                              setSubmitting(false);
                         }, 2000);

                         const requestValues = {
                              first_name: values.first_name || undefined,
                              last_name: values.last_name || undefined,
                              number: values.number || undefined
                         };

                         changeDataUser({requestValues, token});
                    }}
               >
                    {({ isSubmitting, errors, touched, isValid }) => {
                         return (
                              <Form>
                                   {schema.map(({htmlFor, label, name, placeholder, type}) => (
                                        <div key={name} className={css.blockInput}>
                                             <label>
                                                  <Text type="reg18" color="dark">{label}</Text>
                                             </label>
                                             <div  className={css.iconError}>
                                                  {errors[name] && touched[name] && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon"/>}
                                             </div>
                                             <div>
                                                  <Field htmlFor={htmlFor} type={type} name={name} placeholder={placeholder} className={errors[name] && touched[name] ? `${css.inputError}` : `${css.input}`} />
                                             </div>
                                             
                                             <div>
                                                  <Text type="reg16" color="red">
                                                       <ErrorMessage name={name} />
                                                  </Text>
                                             </div>
                                        </div>
                                   ))}
                                   <div className={css.btn}>
                                        <Button type="submit" disabled={isSubmitting} active={isValid}>Сохранить изменения</Button>
                                   </div>
                              </Form>
                         );
                    }}
               </Formik>
          </div>
     );
};