import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import { useAppSelector } from "@/src/hooks/types";



const SettingsPage = () => {

     const { id, name, email } = useAppSelector((state) => state.credentialsSlice.credentials);
     const mobileNumber = "+375297177707";

     return (
          <AccountPageWrapper title={"Настройки"}>
               <AccountPageCredential id={id} mobileNumber={mobileNumber} email={email} isEmailVerified={true} name={name} />
          </AccountPageWrapper>
     );
};

export default SettingsPage;
