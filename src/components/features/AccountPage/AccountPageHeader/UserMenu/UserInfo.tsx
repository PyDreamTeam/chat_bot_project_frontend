import { FC, FormEvent, useEffect, useState } from "react";

import Avatar from "../../../../shared/Avatar/Avatar";

import styles from "./styles/UserInfo.module.css";

import Text from "@/src/components/shared/text/Text";
import UserMenuHeader from "@/src/components/shared/userMenuHeader/UserMenuHeader";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import { useRouter } from "next/router";
import { headerArrow } from "../img/SvgConfig";
import Cookies from "js-cookie";
import { useLogoutUserMutation, useVerifyUserMutation } from "@/src/store/services/userAuth";

interface IUserInfoProps {
     profileOnClick?: (e: FormEvent<HTMLFormElement>) => void;
     onClick?: () => void;
     first_name?: string | undefined;
     last_name?: string | undefined;
     avatarUrl?: string;
     className?: string;
     isOpen?: boolean;
}


const UserInfo: FC<IUserInfoProps> = ({
     onClick,
     first_name = "",
     last_name = "",
     avatarUrl,
     className = "",
     isOpen = false,
     profileOnClick,
}) => {

     const router = useRouter();
     const token = JSON.parse(Cookies.get("loginUser") || "[]");

     const [logoutUser, {isSuccess: isSuccessLogout}] = useLogoutUserMutation();
     const [verifyUser, {isSuccess: isSuccessVerify, isError: isErrorVerify}] = useVerifyUserMutation();

     useEffect(() => {
          verifyUser(token.access);
     }, []);
     
     useEffect(() => {
          if (isErrorVerify) {
               router.push("/sign-in");
          }
     }, [isSuccessVerify, isErrorVerify]);


     const logout = () => {
          logoutUser(token);
     };

     useEffect(() => {
          if(isSuccessLogout) {
               Cookies.remove("loginUser");
               verifyUser(token.access);
          }
     }, [isSuccessLogout]);

     const navElements = [
          {
               text: "Профиль",
               onClick() {
                    router.replace(clientEndpoints.myAccount.profile.get);
               },
          },
          {
               text: "Настройки аккаунта",
               onClick() {
                    router.replace(clientEndpoints.myAccount.profile.personalData);
               },
          },
          {
               text: "Выйти",
               onClick: logout,
          },
     ];

     return (
          <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
               <div className={styles.avatarCircle}>
                    <Avatar type={"forHeader"} url={avatarUrl} />
               </div>
               {first_name && <div className={styles.blockName}>
                    <Text type={"reg18"} color={"black"}>{first_name}</Text>
                    <Text type={"reg18"} color={"black"}>{last_name}</Text>
               </div>}
               <div>{headerArrow}</div>
               {isOpen && <UserMenuHeader activeMenu={isOpen} navButtons={navElements} />}
          </div>
     );
};

export default UserInfo;