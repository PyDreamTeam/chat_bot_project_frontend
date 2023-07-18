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
import { useChangePasswordMutation, useDataUserMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";

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

     const router = useRouter();
     const { uid, token } = router.query;
     const [changePassword, {isSuccess}] = useChangePasswordMutation();
     const [dataUser, {data}] = useDataUserMutation();
     

     useEffect(() => {
          const tn = JSON.parse(Cookies.get("loginUser") || "[]");
          dataUser(tn);
          
     }, []);

     return (
          <div className={css.container}>
               <AuthWrapper titleText={"Измените пароль"}>
                    <div className={css.wrapper}>
                         <Formik
                              initialValues={{
                                   new_password: "",
                                   re_new_password: ""
                              }}
                              validationSchema={Yup.object().shape({
                                   new_password: Yup.string()
                                        .min(8, "содержит не менее 8 символов")
                                        .matches(/^(?=.*[A-Za-z][!-~]+)[^А-Яа-я]*$/, "содержит как строчные (a–z), так и прописные буквы (A–Z)")
                                        .matches(/^(?=.*[0-9])/, "содержит по крайней мере одну цифру (0–9)")
                                        .matches(/^(?=.*[@$!%*?&])/, "содержит по крайней мере один спецсимвол")
                                        .required("Введите пароль"),
                                   re_new_password: Yup.string()
                                        .required("Подтвердите пароль")
                                        .oneOf([Yup.ref("new_password")], "Указанные пароли должны быть идентичными"),
                                   uid: Yup.string(),
                                   token: Yup.string()
                              })}
                              onSubmit={(values, {setSubmitting}) => {
                                   setTimeout(() => {
                                        setSubmitting(false);
                                   }, 1000);
                                   changePassword({...values, uid, token});
                                   if(isSuccess) {
                                        router.push("/change-password/sign-in_new-password");
                                   }
                              }}
                         >
                              {({ isSubmitting, errors, touched, isValid, getFieldProps }) => {

                                   const dataPassword = getFieldProps("new_password");
                                   const password = dataPassword.value;

                                   return (
                                        <Form className={css.form}>
                                             <div className={css.account}>
                                                  <Text type="reg20" color="dark">{data?.first_name} {data?.last_name}</Text>
                                                  <Text type="reg20" color="dark">{data?.email}</Text>
                                             </div>
                                             <div className={css.blockInput}>

                                                  <label htmlFor="new_password">
                                                       <Text type="reg18" color="dark">Новый пароль</Text>
                                                  </label>

                                                  <div className={css.errorIcon}>
                                                       {errors.new_password && touched.new_password && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
                                                  </div>

                                                  <div className={css.groupStateEye}>
                                                       <Field type={openPassword} name="new_password" placeholder="Введите новый пароль" className={errors.new_password && touched.new_password ? `${css.inputError}` : isValid && touched.new_password ? `${css.valid}` : `${css.input}`} />
                                                       <div className={css.stateEye}>
                                                            {openPassword === "password" && <Image src="/sign/closePassword.svg" width={24} height={24} alt="stateEye" onClick={viewPassword} />}
                                                            {openPassword === "text" && <Image src="/sign/openPassword.svg" width={24} height={24} alt="stateEye" onClick={viewPassword} />}
                                                       </div>
                                                  </div>

                                                  {touched.new_password &&
                                                 <div className={css.errorsBlock}>
                                                      <ErrorsPassword password={password}/>
                                                 </div>}

                                             </div>

                                             <div className={css.blockInput}>
                                                  <label htmlFor="re_new_password">
                                                       <Text type="reg18" color="dark">Повторить пароль</Text>
                                                  </label>

                                                  <div className={css.errorIcon}>
                                                       {errors.re_new_password && touched.re_new_password && <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />}
                                                  </div>

                                                  <div className={css.groupStateEye}>
                                                       <Field type={openConfirmPassword} name="re_new_password" placeholder="Повторите новый пароль" className={errors.re_new_password && touched.re_new_password ? `${css.inputError}` : isValid && touched.re_new_password ? `${css.valid}` : `${css.input}`} />
                                                       <div className={css.stateEye}>
                                                            {openConfirmPassword === "password" && <Image src="/sign/closePassword.svg" width={24} height={24} alt="stateEye" onClick={confirmPassword} />}
                                                            {openConfirmPassword === "text" && <Image src="/sign/openPassword.svg" width={24} height={24} alt="stateEye" onClick={confirmPassword} />}
                                                       </div>
                                                  </div>

                                                  <div className={css.error}>
                                                       <Text type="reg16" color="red">
                                                            <ErrorMessage name="re_new_password" />
                                                       </Text>
                                                  </div>
                                             </div>
                                             {/* <div>
                                             <Field type={"text"} name="uid" value={uid}/>
                                             <Field type={"text"} name="token" value={token}/>
                                        </div> */}

                                             <button type="submit" disabled={isSubmitting} className={isValid ? `${css.button}` : `${css.buttonDisabled}`}>
                                               Обновить пароль
                                             </button>
                                        </Form>
                                   );
                              }}
                         </Formik>
                    </div>
               </AuthWrapper>
          </div>
     );
};

export default ChangePassword;