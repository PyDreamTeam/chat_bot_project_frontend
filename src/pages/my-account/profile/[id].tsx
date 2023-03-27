import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import { SELECT_TITLE_CONFIG } from "@/src/components/entities/selectTitle/SelectTitleConfig";

const ProfilePage = () => {
     const router = useRouter();
     const { id, name, email } = useAppSelector((state) => state.credentialsSlice.credentials);
     const mobileNumber = "+375297177707";

     return (
<<<<<<<< HEAD:src/pages/my-account/[slug]/index.tsx
          <AccountPageWrapper title={"Профиль"}>
               <AccountPageCredential id={id} mobileNumber={mobileNumber} email={email} isEmailVerified={true} name={name} />
========
          <AccountPageWrapper page="profile_changeData" title={"Профиль"}>
               <AccountPageCredential
                    page="profile_changeData"
                    mobileNumber={mobileNumber}
                    email={email}
                    isEmailVerified={true}
                    name={name}
               />
>>>>>>>> Pavel:src/pages/my-account/profile/[id].tsx
               <SearchHistory title={"Сохраненные шаблоны"} />
          </AccountPageWrapper>
     );
};

export default ProfilePage;
