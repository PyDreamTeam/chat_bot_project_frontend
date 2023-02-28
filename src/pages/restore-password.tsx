import React from "react";
import AuthWrapper from "@/src/components/features/Auth/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesRestore, inputFieldDataRestore, validationSchemaRestore } from "../pagesData/restore-password";
import styles from "@/src/components/features/Auth/components/AuthRightBlock/AuthRightBlock.module.css";

const RecoveryPassword = () => {
     return (
          <AuthWrapper titleText={"Восстановление пароля"}>
               <FormUniversal
                    validationSchema={validationSchemaRestore}
                    classNameForm="restorePassword"
                    buttonSubmitText="Отправить"
                    initialValues={initialValuesRestore}
                    inputFieldData={inputFieldDataRestore}
               />
          </AuthWrapper>
     );
};

export default RecoveryPassword;