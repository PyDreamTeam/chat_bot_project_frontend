import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import React from "react";

const SuperadminDashboardHeader = () => {
     //  const token = JSON.parse(Cookies.get("loginUser") || "[]");
     //  const { data } = useDataUserQuery(token);
     //  const name = data?.first_name;

     return <div>SuperadminDashboardHeader</div>;
};

export default SuperadminDashboardHeader;
