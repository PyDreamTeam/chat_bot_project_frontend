import { useAppSelector } from "@/src/hooks/types";
import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";

const index = () => {
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     console.log(credentials);
     const router = useRouter();

     return (
          <AccountPageWrapper page="startPage">
               <AccountPageMain page={"startPage"} />
          </AccountPageWrapper>
     );
};

export default index;
