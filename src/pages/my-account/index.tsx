import AccountPageMain from "@/src/components/features/AccountPage/AccountPageMain/AccountPageMain";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { CreateUserResponse } from "@/src/types/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const MyAccount = () => {

     const router = useRouter();

     // async function userVerification() {
     //      let storedData;
     //      try {
     //           storedData = await JSON.parse(localStorage.getItem("userData") || "[]");
     //
     //           if (storedData.auth_token === undefined) {
     //                router.push("/home");
     //           }
     //      }
     //      catch (error) {
     //           console.error("error",error);
     //      }
     // }

     // useEffect(() => {
     //      userVerification();
     // }, []);

     return (
          <AccountPageWrapper page="startPage">
               <AccountPageMain page={"startPage"} />
          </AccountPageWrapper>
     );
};

export default MyAccount;