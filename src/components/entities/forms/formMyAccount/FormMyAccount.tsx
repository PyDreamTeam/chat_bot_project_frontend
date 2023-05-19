import React, { FC } from "react";
import ProfileTitle from "@/src/components/shared/text/ProfileTitle";
import styles from "./styles/FormMyAccount.module.css";
import PersonalData from "./personalData/PersonalData";
import ChangePassword from "./changePassword/ChangePassword";

enum FormMyAccountTypes {
     personalData = "personalData",
     changePassword = "changePassword",
}
interface IFormMyAccount {
     type: keyof typeof FormMyAccountTypes;
}

const FormMyAccount: FC<IFormMyAccount> = ({ type }) => {
     return (
          <div className={styles.formMyAccount}>
               <ProfileTitle text={`${type === "changePassword" ? "Изменить пароль" : "Персональные данные"}`} />
               {type === "changePassword" ? <ChangePassword /> : <PersonalData />}
          </div>
     );
};

export default FormMyAccount;