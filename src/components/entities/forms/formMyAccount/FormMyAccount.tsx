import React, { FC } from "react";
import ProfileTitle from "@/src/components/shared/textfields/ProfileTitle";
import styles from "./styles/FormMyAccount.module.css";
import ChangePassword from "../../formMyAccount/changePassword/ChangePassword";
import PersonalData from "../../../entities/formMyAccount/personalData/PersonalData";

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
               <ProfileTitle text={"Изменить пароль"} />
               {type === "changePassword" ? <ChangePassword /> : <PersonalData />}
          </div>
     );
};

export default FormMyAccount;
