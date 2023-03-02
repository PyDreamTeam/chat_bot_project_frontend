import HomepageWrapper from "@/src/components/widgets/HomepageWrapper";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
     const router = useRouter();
     const data = router.query;
     React.useEffect(() => {
          console.log("MY DATA", data);
     }, [data]);
     return (
          <>
               <h1>Welcome, {data.name}!</h1>
               <h2>Username: {data.name}</h2>
               <h2>Email: {data.email}</h2>
          </>
     );
};

export default index;
