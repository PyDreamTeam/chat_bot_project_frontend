import Text from "@/src/components/shared/text/Text";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC, useEffect } from "react";
import * as Yup from "yup";
import css from "./componentSignIn.module.css";
import Link from "next/link";
import Image from "next/image";
import { ButtonLogin } from "@/src/components/shared/buttons/ButtonLogin";
import { useRouter } from "next/router";
import { useLoginUserMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

interface PropsSignIn {
     schema: {
          htmlFor: string
          label: string
          type: string
          name: "email" | "password";
          placeholder: string
     }[],
     open: () => void;
     close: () => void;
}



const ComponentSignIn: FC<PropsSignIn> = ({ schema = [], open, close }) => {

     const route = useRouter();
     const [loginUser, {data, isSuccess}] = useLoginUserMutation();
     
     useEffect(() => {
          if(isSuccess) {
               Cookies.set("loginUser", JSON.stringify(data));
               route.push("/my-account");
          }
     }, [isSuccess]);

     return (
          <div>
               <Formik
                    initialValues={{
                         email: "",
                         password: "",
                    }}
                    validationSchema={Yup.object().shape({
                         email: Yup.string().email("Неккоректный email").required("Введите e-mail"),
                         password: Yup.string().required("Введите пароль")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                         setTimeout(() => {
                              setSubmitting(false);
                         }, 2000);
                         loginUser(values);
                    }}
               >
                    {({ isSubmitting, errors, touched, isValid }) => {

                         return (
                              <Form className={css.form}>
                                   {schema.map(({htmlFor, label, type, name, placeholder}) => (
                                        <div key={name} className={css.blockInput}>
                                             <label htmlFor={htmlFor}>
                                                  <Text type="reg18" color="black">{label}</Text>
                                             </label>
                                             <div className={css.errorIcon}>
                                                  {errors[name] && touched[name] && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
                                             </div>
                                             <div className={css.groupStateEye}>
                                                  <Field type={type} name={name} placeholder={placeholder} className={errors[name] && touched[name] ? `${css.inputError}` : `${css.input}`} />
                                                  <div className={css.stateEye}>
                                                       {name === "password" && type === "text" && <Image src="/sign/closePassword.svg" width={24} height={24} alt="stateEye" onClick={close}/>}
                                                       {name === "password" && type === "password" && <Image src="/sign/openPassword.svg" width={24} height={24} alt="stateEye" onClick={open}/>}
                                                  </div>
                                             </div>
                                             <div className={css.error}>
                                                  <Text type="reg16" color="red">
                                                       <ErrorMessage name={name} />
                                                  </Text>
                                             </div>
                                        </div>
                                   ))}
                                   <ButtonLogin disabled={isSubmitting} active={isValid} type="submit">Войти</ButtonLogin>
                                   <div className={css.blockInfo}>
                                        <Text type={"reg16"} color={"grey"}>
                                             Забыли пароль?
                                             <Link href={"/recovery-password"} className={css.link}> Восстановите здесь</Link>
                                        </Text>
                                   </div>
                              </Form>
                         );
                    }}
               </Formik>
          </div >
     );
};

export default ComponentSignIn;