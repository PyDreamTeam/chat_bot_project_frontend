import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";

const ProfilePage = () => {
     const router = useRouter();
     const { id, name, email } = useAppSelector((state) => state.credentialsSlice.credentials);
     const mobileNumber = "+375297177707";

     return (
          <AccountPageWrapper page="profile_changeData" title={"Профиль"}>
               <AccountPageCredential
                    page="profile_changeData"
                    mobileNumber={mobileNumber}
                    email={email}
                    isEmailVerified={true}
                    name={name}
               />
               <SearchHistory title={"Сохраненные шаблоны"} />
          </AccountPageWrapper>
     );
};

export default ProfilePage;
