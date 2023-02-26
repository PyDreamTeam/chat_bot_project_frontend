import React, { useState } from "react";
import { useSignUpMutation } from "@/src/store/services/authApi";
import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal, { IInputField } from "../components/entities/forms/FormUniversal";
import { inputFieldDataSignUp, initialValuesSignUp } from "../pagesData/sign-up";

export const SignUp = () => {
     // const [signUp, signUpResponse] = useSignUpMutation(); // signUp - функция для запроса + signUpResponse - объект ответа, он показывает статусы

     // const [show, setShow] = useState<boolean>(false);
     // const showPassword = () => {
     //      setShow(!show);
     // };

     return (
          <AuthWrapper titleText={"Регистрация"}>
               <FormUniversal
                    classNameForm="signUp"
                    buttonSubmitText="Зарегистрироваться"
                    initialValues={initialValuesSignUp}
                    inputFieldData={inputFieldDataSignUp}
               />
          </AuthWrapper>
     );
};

export default SignUp;
