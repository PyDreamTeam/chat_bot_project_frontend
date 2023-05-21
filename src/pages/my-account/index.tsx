import { useAppSelector } from "@/src/hooks/types";
import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";
import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";
import { setCredentials } from "@/src/store/reducers/credentialsSlice";

const index = () => {
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     console.log(credentials);
     const router = useRouter();

     React.useEffect(() => {
          if (credentials.auth_token === "") {
               router.push("/home");
          }
     }, [credentials]);

     return (
          <AccountPageWrapper page="startPage">
               <AccountPageMain page={"startPage"} />
          </AccountPageWrapper>
     );
};

export default index;
