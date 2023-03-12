import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";
import UserAvatar from "@/src/components/shared/Avatar/Avatar";
import AccountPageCredential from "@/src/components/entities/accountpageSettings/AccountpageCredentials";
import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import { SELECT_TITLE_CONFIG } from "@/src/components/entities/selectTitle/SelectTitleConfig";

const ProfilePage = () => {
     const router = useRouter();
     const { id, name, email } = useAppSelector((state) => state.credentialsSlice.credentials);
     console.log(id);
     const mobileNumber = "+375297177707";

     return (
          <AccountPageWrapper title={"Профиль"}>
               <AccountPageCredential id={id} mobileNumber={mobileNumber} email={email} isEmailVerified={true} name={name} />
               <SearchHistory title={"Сохраненные шаблоны"} />
          </AccountPageWrapper>
     );
};

export default ProfilePage;
