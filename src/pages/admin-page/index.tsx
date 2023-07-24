import { useAppSelector } from "@/src/hooks/types";
import React, {useEffect} from "react";
import { useRouter } from "next/router";

import AdminPageWrapper from "@/src/components/wrappers/AdminPageWrapper";
import AdminDashboard from "@/src/components/entities/adminDashboard/AdminDashboard";
import Cookies from "js-cookie";
import { useDataUserQuery, useVerifyUserMutation } from "@/src/store/services/userAuth";


const AdminPage = () => {
     
     const token = JSON.parse(Cookies.get("loginUser") || "[]");
     const {data, isSuccess} = useDataUserQuery(token);
     const [verifyUser, {isError}] = useVerifyUserMutation();

     const router = useRouter();

     useEffect(() => {
          verifyUser(token.access);
     }, []);

     useEffect(() => {
          if(isError) {
               router.push("/sing-in");
          }
     }, [isError]);

     useEffect(() => {
          if(data?.user_role !== "AD" && isSuccess) {
               router.push("/my-account");
          }
     }, [data, isSuccess]);

     return (
          <AdminPageWrapper page={"adminPage"}>
               <AdminDashboard/>
          </AdminPageWrapper>
     );
};

export default AdminPage;