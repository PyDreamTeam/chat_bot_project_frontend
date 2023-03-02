import React, { ChangeEventHandler, useState } from "react";

import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesChange, inputFieldDataChange, validationSchemaChange } from "../pagesData/change-password";

export interface IShowEye {
     password: boolean;
     repeatPassword: boolean;
}

const ChangePassword = () => {
     const [activeEye, setActiveEye] = useState<string>("");
     const [show, setShow] = useState<{ firstEye: boolean; secondEye: boolean }>({
          firstEye: false,
          secondEye: false,
     });
     const showPassword = (id: string) => {
          id === "password" ? setShow({ ...show, firstEye: !show.firstEye }) : setShow({ ...show, secondEye: !show.secondEye });
          setActiveEye(id);
     };
     return (
          <AuthWrapper titleText={"Обновите пароль"}>
               <FormUniversal
                    validationSchema={validationSchemaChange}
                    classNameForm="changePassword"
                    buttonSubmitText="Обновить пароль"
                    initialValues={initialValuesChange}
                    inputFieldData={inputFieldDataChange}
                    showEye={show}
                    onClick={showPassword}
                    activeEye={activeEye}
               />
          </AuthWrapper>
     );
};

export default ChangePassword;
