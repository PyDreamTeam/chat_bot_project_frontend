import { useAppSelector } from "@/src/hooks/types";
import React, {useEffect} from "react";
import { useRouter } from "next/router";

import AdminPageWrapper from "@/src/components/wrappers/AdminPageWrapper";
import AdminDashboard from "@/src/components/entities/adminDashboard/AdminDashboard";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";


const AdminPage = () => {
     
     const token = JSON.parse(Cookies.get("loginUser") || "[]");
     const {data} = useDataUserQuery(token);

     const router = useRouter();

     useEffect(() => {
          if(data?.user_role !== "AD") {
               router.push("/my-account");
          }
     }, [data]);

     return (
          <AdminPageWrapper page={"adminPage"}>
               <AdminDashboard/>
          </AdminPageWrapper>
     );
};

export default AdminPage;