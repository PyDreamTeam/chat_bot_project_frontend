import React, { FC, FormEvent, MouseEventHandler } from "react";

import Avatar from "../../../../shared/Avatar/Avatar";

import styles from "./styles/UserInfo.module.css";

import { useRouter } from "next/router";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import { headerArrow } from "../img/SvgConfig";
import UserMenuHeader from "@/src/components/shared/userMenuHeader/UserMenuHeader";
import Text from "@/src/components/shared/text/Text";

interface IUserInfoProps {
     onClick?: () => void;
     userName?: string | undefined;
     avatarUrl?: string;
     className?: string;
     isOpen?: boolean;
     profileOnClick?: (e: FormEvent<HTMLFormElement>) => void;
}

const UserInfo: FC<IUserInfoProps> = ({ onClick, userName = "", avatarUrl, className = "", isOpen = false }) => {
     const router = useRouter();
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
               onClick: () => {
                    console.log(1);
               },
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