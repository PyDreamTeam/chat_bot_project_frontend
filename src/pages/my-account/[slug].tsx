import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";

const ProfilePage = () => {
     const router = useRouter();
     const { id } = useAppSelector((state) => state.credentialsSlice.credentials);
     console.log(id);


     return (
          <AccountPageWrapper title={"Профиль"}>
               <div>{id}</div>
          </AccountPageWrapper>
     );
};

export default ProfilePage;
