import React from "react";

import ProfileTitle from "@/src/components/shared/textfields/ProfileTitle";
import ChangePassword from "@/src/components/entities/formMyAccount/changePassword/ChangePassword";

import styles from "./styles/FormMyAccount.module.css";

const FormMyAccount = () => {
     return (
          <div className={styles.formMyAccount}>
               <ProfileTitle text={"Изменить пароль"}/>
               <ChangePassword/>
          </div>
     );
};

export default FormMyAccount;