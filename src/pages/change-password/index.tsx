import Text from "@/src/components/shared/text/Text";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import css from "./changePassword.module.css";
import { useRouter } from "next/router";
import { useChangePasswordMutation, useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import { ChangeNewPasswordInput } from "@/src/components/shared/login/ChangeNewPasswordInput/ChangeNewPasswordInput";
import { ReChangeNewPasswordInput } from "@/src/components/shared/login/ReChangeNewPasswordInput/ReChangeNewPasswordInput";
import { ButtonLogin } from "@/src/components/shared/buttons/ButtonLogin";

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
     const [changePassword, {isSuccess, isLoading, error}] = useChangePasswordMutation();
     const tn = JSON.parse(Cookies.get("loginUser") || "[]");
     const {data} = useDataUserQuery(tn);

     useEffect(() => {
          if(isSuccess) {
               router.push("/change-password/sign-in_new-password");
          }
     }, [isSuccess]);
     

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
                              onSubmit={(values) => {
                                   changePassword({...values, uid, token});
                              }}
                         >
                              {({ errors, touched, isValid, getFieldProps }) => {

                                   const dataPassword = getFieldProps("new_password");
                                   const password = dataPassword.value;

                                   return (
                                        <Form className={css.form}>
                                             <div className={css.account}>
                                                  <Text type="reg20" color="dark">{data?.first_name} {data?.last_name}</Text>
                                                  <Text type="reg20" color="dark">{data?.email}</Text>
                                             </div>
                                             <ChangeNewPasswordInput errors={errors} touched={touched} password={password} error={error}/>
                                             <ReChangeNewPasswordInput errors={errors} touched={touched} error={error}/>
                                             <ButtonLogin disabled={isLoading} active={isValid} type="submit">Обновить пароль</ButtonLogin>
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