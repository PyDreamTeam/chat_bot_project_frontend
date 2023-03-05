import React, { useState } from "react";
import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesSignIn, inputFieldDataSignIn, validationSchemaSignIn } from "../pagesData/sign-in";
import { useLazyValidateUserQuery, User } from "../store/services/authApi";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/types";
import { setCredentials } from "../store/reducers/credentialsSlice";

export const SignIn = () => {
     const [validateUser]: any = useLazyValidateUserQuery();
     const router = useRouter();
     const dispatch = useAppDispatch();
     const [show, setShow] = useState<boolean>(false);
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     const showPassword = () => {
          setShow(!show);
     };

     const loginUser = async (values: any) => {
          const response = await validateUser();
          if (response.data.find((user: User) => user.email === values.email && user.password === values.password)) {
               const userData = response.data.find((user: User) => user.email === values.email);
               dispatch(setCredentials(userData));
          } else {
               alert("Invalid email. Input correct data.");
          }
     };

     React.useEffect(() => {
          credentials.name && router.push("/my-account");
     }, [credentials]);
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
