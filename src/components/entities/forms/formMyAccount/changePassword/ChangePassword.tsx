import React, { useState } from "react";
import { initialValuesUpdate, inputFieldDataChange, validationSchemaUpdate } from "@/src/pagesData/update-password";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";
import styles from "../styles/FormMyAccount.module.css";
import Text from "@/src/components/shared/textfields/Text";

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
          <div className={styles.changePasswordBlock}>
               <Text tag={"h4"} color={"black"} type={"subtitleH4"}>
                    Изменить пароль
               </Text>
               <FormUniversal
                    validationSchema={validationSchemaUpdate}
                    classNameForm="changePassword"
                    buttonSubmitText="Сохранить изменения"
                    initialValues={initialValuesUpdate}
                    inputFieldData={inputFieldDataChange}
                    onClick={showPassword}
                    activeEye={activeEye}
                    onSubmit={function (): void | Promise<never> {
                         throw new Error("Function not implemented.");
                    }}
               />
          </div>
     );
};

export default ChangePassword;