import React, { useState } from "react";
import { initialValuesUpdate, inputFieldDataChange, validationSchemaUpdate } from "@/src/pagesData/update-password";
import FormUniversal from "@/src/components/entities/forms/FormUniversal";
import styles from "../styles/FormMyAccount.module.css";
import Title from "@/src/components/shared/text/Title";

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
               <Title color={"black"} type={"h5"}>
                    Изменить пароль
               </Title>
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