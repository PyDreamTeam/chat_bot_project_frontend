import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { useAppDispatch } from "@/src/hooks/types";
import { actions } from "@/src/store/userAuth/sliceUser";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import css from "./componentSignIn.module.css";
import Link from "next/link";
import Image from "next/image";

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
     const dispatch = useAppDispatch();

     return (
          <div className={css.container}>
               <div className={css.backGround}></div>
               <div  className={css.wrapper}>
                    <Title type="h1" color="black">Вход</Title>
                    <div className={css.account}>
                         <Text type="reg16" color="grey">Ещё нет аккаунта?
                              <Link href={"/sign-up"} className={css.link}> Регистрация</Link>
                         </Text>
                    </div>
                    <div className={css.text}>
                         <Text type="reg16" color="grey">Или с помощью почты и пароля</Text>
                    </div>
                    <Formik
                         initialValues={{
                              email: "",
                              password: "",
                         }}
                         validationSchema={Yup.object().shape({
                              email: Yup.string().email("Неккоректный email").required("Введите e-mail"),
                              password: Yup.string().required("Введите пароль")
                         })}
                         onSubmit={(values) => {
                              alert(JSON.stringify(values));
                              dispatch(actions.fetchLoginUser(values));
                         }}
                    >
                         {({ isSubmitting, errors, touched }) => {

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

                                        <button type="submit" disabled={isSubmitting} className={css.button}>
                                             Войти
                                        </button>

                                        <div className={css.blockInfo}>
                                             <Text type={"reg16"} color={"grey"}>
                                             Забыли пароль?
                                                  <Link href={"/"} className={css.link}> Восстановите здесь</Link>
                                             </Text>
                                        </div>
                                   </Form>
                              );
                         }}
                    </Formik>
               </div>
          </div >
     );
};

export default ComponentSignIn;