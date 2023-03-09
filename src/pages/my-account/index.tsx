import { useAppSelector } from "@/src/hooks/types";
import React, { FormEvent } from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";
import id from "@/src/pages/my-account/[slug]";
import { useRouter } from "next/router";

const index = () => {
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     React.useEffect(() => {
          console.log("MY DATA", credentials);
     }, [credentials]);

     const router = useRouter();

     return (
          <AccountPageWrapper title={credentials.name}>
               <AccountPageMain />
          </AccountPageWrapper>
     );
};

export default index;
