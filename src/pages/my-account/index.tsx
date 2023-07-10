import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { CreateUserResponse } from "@/src/types/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const MyAccount = () => {

     const route = useRouter();

     async function userVerification() {
          let token;
          try {
               token = await JSON.parse(localStorage.getItem("loginUser") || "[]");
               if(token.access === undefined) {
                    route.push("/sign-in");
               }
          }
          catch (error) {
               console.error("error",error);
          }
     }

     useEffect(() => {
          userVerification();
     }, []);

     return (
          <AccountPageWrapper page="startPage">
               <AccountPageMain page={"startPage"} />
          </AccountPageWrapper>
     );
};

export default MyAccount;