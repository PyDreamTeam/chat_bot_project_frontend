import React, { FC } from "react";

import Avatar from "../../../../shared/UserAvatar/UserAvatar";

import styles from "./UserInfo.module.css";

import UserMenuHeader from "../../../../shared/UserMenuHeader/UserMenuHeader";
import { headerArrow } from "@/src/components/features/HomePage/HomePageHeader/pictures/SvgConfig";
import { store } from "@/src/store/store";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";

const navElements = [
     { href: "/home", text: "Профиль" },
     { href: "/home", text: "Настройки аккаунта" },
     {
          href: "/home",
          text: "Выйти",
          onClick: () => {
               store.dispatch(removeCredentials());
          },
     },
];

interface IUserInfoProps {
     onClick?: () => void;
     userName?: string | undefined;
     avatarUrl?: string;
     className?: string;
     isOpen?: boolean;
}

const UserInfo: FC<IUserInfoProps> = ({ onClick, userName = "", avatarUrl, className = "", isOpen = false }) => {
     return (
          <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
               <div className={styles.avatarCircle}>
                    <Avatar url={avatarUrl} />
               </div>
               {userName && <span className={styles.userName}>{userName}</span>}
               <div>{headerArrow}</div>
               {isOpen && <UserMenuHeader activeMenu={isOpen} navButtons={navElements} />}
          </div>
     );
};

export default UserInfo;
