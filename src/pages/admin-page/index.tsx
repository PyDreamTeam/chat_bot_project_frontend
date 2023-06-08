import { useAppSelector } from "@/src/hooks/types";
import React from "react";
import { useRouter } from "next/router";

import AdminPageWrapper from "@/src/components/wrappers/AdminPageWrapper";


const AdminPage = () => {
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     console.log(credentials);
     const router = useRouter();

     React.useEffect(() => {
          if (credentials.auth_token === "") {
               router.push("/admin-page");
          }
     }, [credentials]);

     return (
          <AdminPageWrapper page={"adminPage"}>

          </AdminPageWrapper>
     );
};

export default AdminPage;