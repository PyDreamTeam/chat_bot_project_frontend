import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import SearchHistory from "@/src/components/entities/MyAccountPageComponents/searchHistory/SearchHistory";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useAppSelector } from "@/src/hooks/types";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
     const router = useRouter();
     const { id, name, email } = useAppSelector((state) => state.credentialsSlice.credentials);
     const mobileNumber = "+375297177707";
     return (
          <AccountPageWrapper page="profile_templates">
               <AccountPageCredential
                    page="profile_templates"
                    mobileNumber={mobileNumber}
                    email={email}
                    isEmailVerified={true}
                    name={name}
               />
               <SearchHistory title={"Сохраненные шаблоны"} />
          </AccountPageWrapper>
     );
};

export default index;
