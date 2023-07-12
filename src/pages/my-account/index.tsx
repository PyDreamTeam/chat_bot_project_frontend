import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";


const MyAccount = () => {

     const route = useRouter();

     useEffect(() => {
          const token = JSON.parse(Cookies.get("loginUser") || "[]");
          if (token.access === undefined) {
               route.push("/sign-in");
          }
     }, []);

     return (
          <AccountPageWrapper page="startPage">
               <AccountPageMain page={"startPage"} />
          </AccountPageWrapper>
     );
};

export default MyAccount;