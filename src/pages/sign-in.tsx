import React, { useState } from "react";
import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesSignIn, inputFieldDataSignIn, validationSchemaSignIn } from "../pagesData/sign-in";
import { useLazyValidateUserQuery, User } from "../store/services/authApi";
import { useRouter } from "next/router";

export const SignIn = () => {

     const [validateUser]: any = useLazyValidateUserQuery();
     const router = useRouter();

     const [show, setShow] = useState<boolean>(false);
     
     const showPassword = () => {
          setShow(!show);
     };


     const loginUser = async (values: any) => {
          const response = await validateUser();
          if (response.data.find((user: User) => user.email === values.email && user.password === values.password)) {
               router.push({
                    pathname: "/my-account",
                    query: response.data.find((user: User) => user.email === values.email), // В query можно передавать любые данные в URL на страницу редиректа
               });
          } else {
               alert("Invalid email. Input correct data.");
          }
     };
     return (
          <AuthWrapper titleText={"Вход"}>
               <FormUniversal
                    onSubmit={loginUser}
                    validationSchema={validationSchemaSignIn}
                    classNameForm="signIn"
                    buttonSubmitText="Войти"
                    initialValues={initialValuesSignIn}
                    inputFieldData={inputFieldDataSignIn}
                    showEye={show}
                    onClick={showPassword}
               />
          </AuthWrapper>
     );
};

export default SignIn;
