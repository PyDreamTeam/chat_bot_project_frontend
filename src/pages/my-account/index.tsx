import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRefreshTokenMutation, useVerifyUserMutation } from "@/src/store/services/userAuth";


const MyAccount = () => {

     const route = useRouter();
     const token = JSON.parse(Cookies.get("loginUser") || "[]");
     const [verifyUser, {isError}] = useVerifyUserMutation();

     useEffect(() => {
          verifyUser(token.access);
     }, []);

     useEffect(() => {
          if (isError) {
               route.push("/sign-in");
          }
     }, [isError]);

     return (
          <AccountPageWrapper page="startPage">
               <AccountPageMain page={"startPage"} />
          </AccountPageWrapper>
     );
};

export default MyAccount;