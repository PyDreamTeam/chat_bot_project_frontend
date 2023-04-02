import React, { FC, FormEvent, MouseEventHandler } from "react";

import Avatar from "../../../../shared/Avatar/Avatar";

import styles from "./styles/UserInfo.module.css";

import UserMenuHeader from "../../../../shared/userMenuHeader/UserMenuHeader";
import { headerArrow } from "@/src/components/features/AccountPage/AccountPageHeader/img/SvgConfig";

interface IUserInfoProps {
     profileOnClick?: (e: FormEvent<HTMLFormElement>) => void;
     onClick?: () => void;
     userName?: string | undefined;
     avatarUrl?: string;
     className?: string;
     isOpen?: boolean;
}

const UserInfo: FC<IUserInfoProps> = ({ onClick, userName = "", avatarUrl, className = "", isOpen = false, profileOnClick }) => {
     const navElements = [
          { text: "Профиль", onClick: profileOnClick },
          { text: "Настройки аккаунта" },
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
