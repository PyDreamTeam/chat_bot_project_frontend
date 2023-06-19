import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import * as Yup from "yup";
import { actions } from "../../../store/userAuth/sliceUser";
import css from "./componentSignUp.module.css";

interface PropsSignUp {
     schema: {
          htmlFor: string
          label: string
          type: string
          name: string
          placeholder: string
     }[],
     open?: () => void;
     close?: () => void;
}

const err = {
     min: "содержит не менее 8 символов",
     string: "содержит как строчные (a–z), так и прописные буквы (A–Z)",
     number: "содержит по крайней мере одну цифру (0–9)",
     special: "содержит по крайней мере один спецсимвол",
     req: "Введите пароль",
};

export const TemplateSignUp: FC<PropsSignUp> = ({ schema, open, close }) => {


     const route = useRouter();
     const dispatch = useAppDispatch();
     const loadStatus = useAppSelector(state => state.userAuthReducer.loadStatus);
     const userToken = useAppSelector(state => state.userAuthReducer.userCreate.auth_token);


     useEffect(() => {
          if (userToken) {
               route.push("/my-account");
          }
     }, [userToken]);

     return (
          <div className={css.container}>
               <div className={css.backGround}></div>
               <div className={css.wrapper}>
                    <Title type="h1" color="black">Регистрация</Title>
                    <div className={css.account}>
                         <Text type="reg16" color="grey">Уже есть аккаунт?
                              <Link href={"/sign-in"} className={css.link}> Войдите</Link>
                         </Text>
                    </div>
                    <Formik
                         initialValues={{
                              first_name: "",
                              email: "",
                              password: "",
                              get_email_notifications: false
                         }}
                         validationSchema={Yup.object().shape({
                              first_name: Yup.string().required("Введите имя"),
                              email: Yup.string().email("Неккоректный email").required("Введите email"),
                              password: Yup.string()
                                   .min(8, err.min)
                                   .matches(/^(?=.*[A-Za-z][!-~]+)[^А-Яа-я]*$/, err.string)
                                   .matches(/^(?=.*[0-9])/, err.number)
                                   .matches(/^(?=.*[@$!%*?&])/, err.special)
                                   .required(err.req)
                         })}
                         onSubmit={(values) => {
                              dispatch(actions.fetchCreateUser(values));
                              console.log(values);

                         }}
                    >
                         {({ isSubmitting, errors, touched }) => {

                              return (
                                   <Form className={css.form}>
                                        {schema.map((item) => (
                                             <div key={item.name} className={css.blockInput}>
                                                  <label htmlFor={item.htmlFor}>
                                                       <Text type="reg18" color="black">{item.label}</Text>
                                                  </label>
                                                  <div className={css.errorIcon}>
                                                       {errors[item.name] && touched[item.name] && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
                                                  </div>

                                                  <div className={css.groupStateEye}>
                                                       <Field type={item.type} name={item.name} placeholder={item.placeholder} className={errors[item.name] && touched[item.name] ? `${css.inputError}` : `${css.input}`} />
                                                       <div className={css.stateEye}>
                                                            {item.name === "password" && item.type === "text" && <Image src="/sign/closePassword.svg" width={24} height={24} alt="stateEye" onClick={close}/>}
                                                            {item.name === "password" && item.type === "password" && <Image src="/sign/openPassword.svg" width={24} height={24} alt="stateEye" onClick={open}/>}
                                                       </div>
                                                  </div>
                                                  <div className={css.error}>
                                                       <Text type="reg16" color="red">
                                                            <ErrorMessage name={item.name} />
                                                       </Text>
                                                  </div>

                                             </div>

                                        ))}

                                        <div className={css.notifications}>
                                             <Field type="checkbox" name="get_email_notifications" className={css.checkbox} />
                                             <span><Text type="reg16" color="black">Я хочу получать уведомления и новости на почту</Text></span>
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className={css.button}>
                                             Зарегистрироваться
                                        </button>

                                        <div className={css.blockInfo}>
                                             <Text type={"reg16"} color={"grey"}>
                                                  Нажимая кнопку «Зарегистрироваться», вы принимаете условия
                                                  <Link href={"/"} className={css.link}> пользовательского соглашения</Link>
                                             </Text>
                                        </div>

                                   </Form>);
                         }}
                    </Formik>
               </div>
          </div>
     );
};