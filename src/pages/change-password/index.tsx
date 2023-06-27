import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { CreateUserResponse } from "@/src/types/user";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import css from "./changePassword.module.css";
import { ErrorsPassword } from "@/src/components/entities/errorsPassword/ErrorsPassword";
import { useRouter } from "next/router";

const ChangePassword = () => {

     const [openPassword, setOpenPassword] = useState<string>("password");
     const [openConfirmPassword, setOpenConfirmPassword] = useState<string>("password");

     const viewPassword = () => {
          if (openPassword === "text") {
               setOpenPassword("password");
          }

          if (openPassword === "password") {
               setOpenPassword("text");
          }
     };

     const confirmPassword = () => {
          if (openConfirmPassword === "text") {
               setOpenConfirmPassword("password");
          }

          if (openConfirmPassword === "password") {
               setOpenConfirmPassword("text");
          }
     };

     const [userData, setUserData] = useState<CreateUserResponse>({
          auth_token: "", email: "", id: "", first_name: "", last_name: "", user_role: "", emailNotification: false
     });
     
     useEffect(() => {
          setUserData(JSON.parse(localStorage.getItem("userData") || "[]"));
     }, []);
     
     const router = useRouter();

     return (
          <div className={css.container}>
               <div className={css.backGround}></div>
               <div className={css.wrapper}>
                    <Title type="h1" color="black">Обновите пароль</Title>
                    
                    <Formik
                         initialValues={{
                              password: "",
                              confirmPassword: ""
                         }}
                         validationSchema={Yup.object().shape({
                              password: Yup.string()
                                   .min(8, "содержит не менее 8 символов")
                                   .matches(/^(?=.*[A-Za-z][!-~]+)[^А-Яа-я]*$/, "содержит как строчные (a–z), так и прописные буквы (A–Z)")
                                   .matches(/^(?=.*[0-9])/, "содержит по крайней мере одну цифру (0–9)")
                                   .matches(/^(?=.*[@$!%*?&])/, "содержит по крайней мере один спецсимвол")
                                   .required("Введите пароль"),
                              confirmPassword: Yup.string()
                                   .required("Подтвердите пароль")
                                   .oneOf([Yup.ref("password")], "Указанные пароли должны быть идентичными")
                         })}
                         onSubmit={(values, {setSubmitting}) => {
                              setTimeout(() => {
                                   setSubmitting(false);
                              }, 1000);
                              console.log(values);
                              router.push("/change-password/sign-in_new-password");
                         }}
                    >
                         {({ isSubmitting, errors, touched, isValid, getFieldProps }) => {

                              const dataPassword = getFieldProps("password");
                              const password = dataPassword.value;

                              return (
                                   <Form className={css.form}>
                                        <div className={css.account}>
                                             <Text type="reg20" color="dark">{userData.first_name} {userData.last_name}</Text>
                                             <Text type="reg20" color="dark">{userData.email}</Text>
                                        </div>
                                        <div className={css.blockInput}>
                                             <label htmlFor="password">
                                                  <Text type="reg18" color="dark">Новый пароль</Text>
                                             </label>

                                             <div className={css.errorIcon}>
                                                  {errors.password && touched.password && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
                                             </div>

                                             <div className={css.groupStateEye}>
                                                  <Field type={openPassword} name="password" placeholder="Введите новый пароль" className={errors.password && touched.password ? `${css.inputError}` : isValid && touched.password ? `${css.valid}` : `${css.input}`} />
                                                  <div className={css.stateEye}>
                                                       {openPassword === "password" && <Image src="/sign/closePassword.svg" width={24} height={24} alt="stateEye" onClick={viewPassword} />}
                                                       {openPassword === "text" && <Image src="/sign/openPassword.svg" width={24} height={24} alt="stateEye" onClick={viewPassword} />}
                                                  </div>
                                             </div>

                                             {touched.password && 
                                             <div className={css.errorsBlock}>
                                                  <ErrorsPassword password={password}/>
                                             </div>}

                                        </div>

                                        <div className={css.blockInput}>
                                             <label htmlFor="confirmPassword">
                                                  <Text type="reg18" color="dark">Повторить пароль</Text>
                                             </label>

                                             <div className={css.errorIcon}>
                                                  {errors.confirmPassword && touched.confirmPassword && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
                                             </div>

                                             <div className={css.groupStateEye}>
                                                  <Field type={openConfirmPassword} name="confirmPassword" placeholder="Повторите новый пароль" className={errors.confirmPassword && touched.confirmPassword ? `${css.inputError}` : isValid && touched.confirmPassword ? `${css.valid}` : `${css.input}`} />
                                                  <div className={css.stateEye}>
                                                       {openConfirmPassword === "password" && <Image src="/sign/closePassword.svg" width={24} height={24} alt="stateEye" onClick={confirmPassword} />}
                                                       {openConfirmPassword === "text" && <Image src="/sign/openPassword.svg" width={24} height={24} alt="stateEye" onClick={confirmPassword} />}
                                                  </div>
                                             </div>

                                             <div className={css.error}>
                                                  <Text type="reg16" color="red">
                                                       <ErrorMessage name="confirmPassword" />
                                                  </Text>
                                             </div>
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className={isValid ? `${css.button}` : `${css.buttonDisabled}`}>
                                    Обновить пароль
                                        </button>
                                   </Form>
                              );
                         }}
                    </Formik>
               </div>
          </div>
     );
};

export default ChangePassword;