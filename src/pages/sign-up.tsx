import React, { useState } from "react";
import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal, { IInputField } from "../components/entities/forms/FormUniversal";
import { inputFieldDataSignUp, initialValuesSignUp, validationSchemaSignUp } from "../pagesData/sign-up";
import { useCreateUserMutation } from "../store/services/authApi";
import { useRouter } from "next/router";

export const SignUp = () => {

     const [createUser, { data, isSuccess }]: any = useCreateUserMutation();
     const router = useRouter();

     const [show, setShow] = useState<boolean>(false);
     const showPassword = () => {
          setShow(!show);
     };

     React.useEffect(() => {
          isSuccess &&
               router.push({
                    pathname: "/my-account",
                    query: data,
               });
     }, [isSuccess]);
     return (
          <AuthWrapper titleText={"Регистрация"}>
               <FormUniversal
                    onSubmit={createUser}
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
