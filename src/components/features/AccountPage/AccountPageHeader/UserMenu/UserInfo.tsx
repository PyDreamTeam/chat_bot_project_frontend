import React, { FC, FormEvent, MouseEventHandler } from "react";

import Avatar from "../../../../shared/Avatar/Avatar";

import styles from "./UserInfo.module.css";

import UserMenuHeader from "../../../../shared/UserMenuHeader/UserMenuHeader";
import { headerArrow } from "@/src/components/features/AccountPage/AccountPageHeader/pictures/SvgConfig";
import { useRouter } from "next/router";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";

interface IUserInfoProps {
     onClick?: () => void;
     userName?: string | undefined;
     avatarUrl?: string;
     className?: string;
     isOpen?: boolean;
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
                    router.replace(clientEndpoints.myAccount.profile.settings);
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
               {userName && <span className={styles.userName}>{userName}</span>}
               <div>{headerArrow}</div>
               {isOpen && <UserMenuHeader activeMenu={isOpen} navButtons={navElements} />}
          </div>
     );
};

export default UserInfo;
