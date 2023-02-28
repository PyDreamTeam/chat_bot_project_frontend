import React from "react";

import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesChange, inputFieldDataChange, validationSchemaChange } from "../pagesData/change-password";

const ChangePassword = () => {
     return (
          <AuthWrapper titleText={"Обновите пароль"}>
               <FormUniversal
                    validationSchema={validationSchemaChange}
                    classNameForm="changePassword"
                    buttonSubmitText="Обновить пароль"
                    initialValues={initialValuesChange}
                    inputFieldData={inputFieldDataChange}
               />
          </AuthWrapper>
     );
};

export default ChangePassword;