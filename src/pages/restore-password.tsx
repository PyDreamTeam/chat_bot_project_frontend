import React from "react";
import AuthWrapper from "@/src/components/widgets/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesRestore, inputFieldDataRestore, validationSchemaRestore } from "../pagesData/restore-password";

const RecoveryPassword = () => {
     return (
          <AuthWrapper titleText={"Восстановление пароля"}>
               <FormUniversal
                    onSubmit={() => console.log(1)}
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