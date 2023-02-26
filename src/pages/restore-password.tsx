import React from "react";
import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesRestore, inputFieldDataRestore, validationSchemaRestore } from "../pagesData/restore-password";

const RecoveryPassword = () => {
     return (
          <AuthWrapper titleText={"Восстановление пароля"}>
               <FormUniversal
                    validationSchema={validationSchemaRestore}
                    classNameForm="restorePassword"
                    buttonSubmitText="Войти"
                    initialValues={initialValuesRestore}
                    inputFieldData={inputFieldDataRestore}
               />
          </AuthWrapper>
     );
};

export default RecoveryPassword;
