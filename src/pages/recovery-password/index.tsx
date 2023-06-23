import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import css from "./recovoryPassword.module.css";

const RecoveryPassword = () => {
     return (
          <div className={css.container}>
               <div className={css.backGround}></div>
               <div className={css.wrapper}>
                    <Title type="h1" color="black">Восстановление пароля</Title>
                    <div className={css.account}>
                         <Text type="reg20" color="grey">Укажите Email, на который вы создавали личный кабинет</Text>
                    </div>
                    <Formik
                         initialValues={{
                              email: ""
                         }}
                         validationSchema={Yup.object({
                              email: Yup.string().required("Введите email").email("Неккоректный email")
                         })}
                         onSubmit={(values) => console.log(values)}
                    >
                         {({ isSubmitting, errors, touched }) => {

                              return (
                                   <Form className={css.form}>
                                        <label htmlFor="email">
                                             <Text type="reg18" color="black">E-mail</Text>
                                        </label>
                                        <div className={css.errorIcon}>
                                             {errors.email && touched.email && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
                                        </div>

                                        <div className={css.groupStateEye}>
                                             <Field type="email" name="email" placeholder="example@mail.com" className={errors.email && touched.email ? `${css.inputError}` : `${css.input}`} />
                                        </div>
                                        
                                        <div className={css.error}>
                                             <Text type="reg16" color="red">
                                                  <ErrorMessage name="email" />
                                             </Text>
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className={css.button}>
                                        Отправить
                                        </button>

                                   </Form>
                              );
                         }}
                    </Formik>
               </div>
          </div>
     );
};

export default RecoveryPassword;