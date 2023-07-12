import { FC, FormEvent, useEffect } from "react";

import Avatar from "../../../../shared/Avatar/Avatar";

import styles from "./styles/UserInfo.module.css";

import Text from "@/src/components/shared/text/Text";
import UserMenuHeader from "@/src/components/shared/userMenuHeader/UserMenuHeader";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
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
     const token = JSON.parse(Cookies.get("loginUser") || "[]");

     const [logoutUser, {status}] = useLogoutUserMutation();
     const [verifyUser, {isSuccess}] = useVerifyUserMutation();

     console.log("isSuccess", isSuccess,);
     console.log("status", status);

     async function qwe() {
          let completed;
          const access = await token;
          verifyUser(access.refresh);
          
          if(!completed) {
               Cookies.remove("loginUser");
          }
     }

     useEffect(() => {
          qwe();
     }, []);

     const logout = () => {
          if (isSuccess) {
               logoutUser(token);
               if (status === "fulfilled") {
                    Cookies.remove("loginUser");
               }
          }
     };
     

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