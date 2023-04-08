import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import { SELECT_TITLE_CONFIG } from "@/src/components/entities/selectTitle/SelectTitleConfig";
import PersonalDataForm from "@/src/components/entities/forms/formMyAccount/personalData/PersonalData";

const PersonalData = () => {
     const router = useRouter();
     const { name, email } = useAppSelector((state) => state.credentialsSlice.credentials);
     const mobileNumber = "+375297177707";

     return (
          <AccountPageWrapper page="profile_settings_personalData">
               <AccountPageCredential
                    page="profile_settings_personalData"
                    mobileNumber={mobileNumber}
                    email={email}
                    isEmailVerified={true}
                    name={name}
               />
               <PersonalDataForm />
          </AccountPageWrapper>
     );
};

export default PersonalData;
