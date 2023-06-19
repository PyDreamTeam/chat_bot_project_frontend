import React, { useState } from "react";
import AuthWrapper from "@/src/components/wrappers/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesSignIn, inputFieldDataSignIn, validationSchemaSignIn } from "../pagesData/sign-in";
import { authApi, User, useUserAuthMutation } from "../store/services/authApi";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/types";
import { setCredentials } from "../store/reducers/credentialsSlice";

export const SignIn = () => {
     const [validateUser, { data, isError, isLoading, isSuccess }] = authApi.useUserAuthMutation();

     console.log(data, isError, isLoading);

     const router = useRouter();
     const dispatch = useAppDispatch();
     const [show, setShow] = useState<boolean>(false);

     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);

     const showPassword = () => {
          setShow(!show);
     };

     // const [validateUser]: any = useLazyValidateUserQuery();

     // const loginUser = async (values: any) => {
     //      const response = await validateUser(values);
     //      if (response.data.find((user: User) => user.email === values.email && user.password === values.password)) {
     //           const userData = response.data.find((user: User) => user.email === values.email);
     //           dispatch(setCredentials(userData));
     //      } else {
     //           alert("Invalid email. Input correct data.");
     //      }
     // };

     React.useEffect(() => {
          if (data) {
               dispatch(setCredentials(data));
               router.push("/my-account");
          }
     }, [isSuccess]);
     return (
          <AuthWrapper titleText={"Вход"}>
               <FormUniversal
                    onSubmit={validateUser}
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
