import React, { ChangeEventHandler, useState } from "react";

import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesChange, inputFieldDataChange, validationSchemaChange } from "../pagesData/change-password";

export interface IShowEye {
     password: boolean;
     repeatPassword: boolean;
}

const ChangePassword = () => {
     const [activeEye, setActiveEye] = useState({ password: false, repeatPassword: false });

     const showPassword = (id: "password" | "repeatPassword") => {
          if (activeEye[id]) {
               setActiveEye((value) => ({ ...value, [id]: false }));
          } else {
               setActiveEye((value) => ({ ...value, [id]: true }));
          }
     };

     return (
          <AuthWrapper titleText={"Обновите пароль"}>
               <FormUniversal
                    validationSchema={validationSchemaChange}
                    classNameForm="changePassword"
                    buttonSubmitText="Обновить пароль"
                    initialValues={initialValuesChange}
                    inputFieldData={inputFieldDataChange}
                    onClick={showPassword}
                    activeEye={activeEye}
               />
          </AuthWrapper>
     );
};

export default ChangePassword;
