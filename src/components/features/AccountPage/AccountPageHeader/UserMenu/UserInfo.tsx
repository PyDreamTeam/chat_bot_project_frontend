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
     handleLogOut: () => void;
     onClick?: () => void;
     userName?: string | undefined;
     avatarUrl?: string;
     className?: string;
     isOpen?: boolean;
}


const UserInfo: FC<IUserInfoProps> = ({
     handleLogOut,
     onClick,
     userName = "",
     avatarUrl,
     className = "",
     isOpen = false,
     profileOnClick,
}) => {

     const router = useRouter();
     

     const [logoutUser, {isSuccess: isSuccessLogout}] = useLogoutUserMutation();
     const [verifyUser, {isSuccess: isSuccessVerify, isError: isErrorVerify, isLoading}] = useVerifyUserMutation();

     const [isVerified, setIsVerified] = useState(false);

     useEffect(() => {
          const token = JSON.parse(Cookies.get("loginUser") || "[]");
          verifyUser(token.access);
     }, []);
     
     useEffect(() => {
          if (isSuccessVerify) {
               setIsVerified(true);
          }
          if (isErrorVerify) {
               router.push("/sign-in");
          }
     }, [isSuccessVerify, isErrorVerify]);


     const logout = () => {
          const token = JSON.parse(Cookies.get("loginUser") || "[]");
          logoutUser(token);
     };

     useEffect(() => {
          const token = JSON.parse(Cookies.get("loginUser") || "[]");
          if(isSuccessLogout) {
               Cookies.remove("loginUser");
               verifyUser(token.refresh);
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
               {userName && <Text type={"reg18"} color={"black"}>{userName}</Text>}
               <div>{headerArrow}</div>
               {isOpen && <UserMenuHeader activeMenu={isOpen} navButtons={navElements} />}
          </div>
     );
};

export default UserInfo;

//profileOnClick={profileOnClick}