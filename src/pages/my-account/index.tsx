import HomepageWrapper from "@/src/components/widgets/HomepageWrapper";
import { useAppSelector } from "@/src/hooks/types";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
     const router = useRouter();
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     React.useEffect(() => {
          console.log("MY DATA", credentials);
     }, [credentials]);
     return (
          <>
               <h1>Welcome, {credentials.name}!</h1>
               <h2>Username: {credentials.name}</h2>
               <h2>Email: {credentials.email}</h2>
          </>
     );
};

export default index;
