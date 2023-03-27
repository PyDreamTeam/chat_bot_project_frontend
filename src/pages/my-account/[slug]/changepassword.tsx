import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import { useAppSelector } from "@/src/hooks/types";
import FormMyAccount from "@/src/components/entities/forms/formMyAccount/FormMyAccount";
import ErrorList from "@/src/components/entities/errorList/ErrorList";

const SettingsPage = () => {
     const { id, name, email } = useAppSelector((state) => state.credentialsSlice.credentials);
     const mobileNumber = "+375297177707";

     return (
          <AccountPageWrapper title={"Настройки"}>
               <AccountPageCredential id={id} mobileNumber={mobileNumber} email={email} isEmailVerified={true} name={name} />
               <FormMyAccount type={"changePassword"} />
               <ErrorList />
          </AccountPageWrapper>
     );
};

export default SettingsPage;
