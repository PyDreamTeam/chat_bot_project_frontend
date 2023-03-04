import React, { FC } from "react";

import Avatar from "../../../shared/UserAvatar/UserAvatar";

import styles from "./UserInfo.module.css";

import UserMenuHeader from "../../../shared/UserMenuHeader/UserMenuHeader";
import { headerArrow } from "@/src/components/features/AuthHeader/pictures/SvgConfig";

interface IUserInfoProps {
  onClickLogOut?: () => void;
  onClick?: () => void;
  userName?: string | undefined;
  avatarUrl?: string
  className?: string
  isOpen?: boolean
}

const UserInfo: FC<IUserInfoProps> = (
     {
          onClick,
          userName="",
          avatarUrl,
          className = "",
          onClickLogOut,
          isOpen= false,
     }) => {
     return (
          <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
               <div className={styles.avatarCircle}>
                    <Avatar url={avatarUrl} />
               </div>
               {userName && <span className={styles.userName}>{userName}</span>}
               <div>{headerArrow}</div>
               {isOpen && <UserMenuHeader activeMenu={isOpen} onClick={onClickLogOut}/> }
          </div>
     );
};

export default UserInfo;
