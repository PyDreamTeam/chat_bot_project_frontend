import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import SearchHistory from "@/src/components/entities/MyAccountPageComponents/searchHistory/SearchHistory";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import { SELECT_TITLE_CONFIG } from "@/src/components/entities/selectTitle/SelectTitleConfig";
import PersonalData from "@/src/components/entities/forms/formMyAccount/personalData/PersonalData";

const ProfilePage = () => {
     const router = useRouter();
     const { first_name, email, emailNotification } = useAppSelector((state) => state.credentialsSlice.credentials);
     const mobileNumber = "+375297177707";

     return (
          <AccountPageWrapper page="profile_settings_personalData">
               <AccountPageCredential
                    page="profile_settings_personalData"
                    mobileNumber={mobileNumber}
                    email={email}
                    isEmailVerified={emailNotification}
                    name={first_name}
               />
               <PersonalData />
          </AccountPageWrapper>
     );
};

export default ProfilePage;
