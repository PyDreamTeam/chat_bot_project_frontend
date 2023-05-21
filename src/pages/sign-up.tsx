import React, { useState } from "react";
import AuthWrapper from "@/src/components/widgets/AuthWrapper";
import FormUniversal, { IInputField } from "../components/entities/forms/FormUniversal";
import { inputFieldDataSignUp, initialValuesSignUp, validationSchemaSignUp } from "../pagesData/sign-up";
import { authApi, useCreateUserMutation } from "../store/services/authApi";
import { useRouter } from "next/router";
import { useAppDispatch } from "../hooks/types";
import { setCredentials } from "../store/reducers/credentialsSlice";

export const SignUp = () => {
     // const [createUser, { data, isSuccess }]: any = useCreateUserMutation();

     const [createUserQuery, { isError, isLoading, data, isSuccess }] = authApi.useCreateUserMutation();

     console.log(data, isSuccess);

     const router = useRouter();
     const dispatch = useAppDispatch();

     const [show, setShow] = useState<boolean>(false);
     const showPassword = () => {
          setShow(!show);
     };

     React.useEffect(() => {
          if (data) {
               dispatch(setCredentials(data));
               router.push("/my-account");
          }
     }, [isSuccess]);
     return (
          <AuthWrapper titleText={"Регистрация"}>
               <FormUniversal
                    onSubmit={createUserQuery}
                    validationSchema={validationSchemaSignUp}
                    classNameForm="signUp"
                    buttonSubmitText="Зарегистрироваться"
                    initialValues={initialValuesSignUp}
                    inputFieldData={inputFieldDataSignUp}
                    showEye={show}
                    onClick={showPassword}
               />
          </AuthWrapper>
     );
};

export default SignUp;
