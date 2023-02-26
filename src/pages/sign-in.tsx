import React from "react";
import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesSignIn, inputFieldDataSignIn, validationSchemaSignIn } from "../pagesData/sign-in";

export const SignIn = () => {
     // const [formValues, setFormValues] = useState();

     // const [show, setShow] = useState<boolean>(false);

     // const [signIn, signInResponse] = useSignInMutation(); //signIn - функция для запроса + signInResponse - объект ответа, он показывает статусы

     // console.log(signInResponse?.data);

     // const showPassword = () => {
     //      setShow(!show);
     // };

     return (
          <AuthWrapper titleText={"Вход"}>
               <FormUniversal
                    validationSchema={validationSchemaSignIn}
                    classNameForm="signIn"
                    buttonSubmitText="Войти"
                    initialValues={initialValuesSignIn}
                    inputFieldData={inputFieldDataSignIn}
               />
          </AuthWrapper>
     );
};

export default SignIn;
