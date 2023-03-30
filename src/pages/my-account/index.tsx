import { useAppSelector } from "@/src/hooks/types";
import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import { SELECT_TITLE_CONFIG } from "@/src/components/entities/selectTitle/SelectTitleConfig";
import SelectTitle from "@/src/components/entities/selectTitle/SelectTitle";
import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";

const index = () => {
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     console.log(credentials);
     const router = useRouter();

     return (
          <AccountPageWrapper page="startPage" >
               <AccountPageMain page={"startPage"} />
          </AccountPageWrapper>
     );
};

export default index;
