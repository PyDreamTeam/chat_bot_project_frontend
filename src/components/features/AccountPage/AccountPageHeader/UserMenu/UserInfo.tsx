import { FC, FormEvent } from "react";

import Avatar from "../../../../shared/Avatar/Avatar";

import styles from "./styles/UserInfo.module.css";

import Text from "@/src/components/shared/text/Text";
import UserMenuHeader from "@/src/components/shared/userMenuHeader/UserMenuHeader";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import { actions } from "@/src/store/userAuth/sliceUser";
import { useRouter } from "next/router";
import { headerArrow } from "../img/SvgConfig";

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
     const dispatch = useAppDispatch();

     async function qwe() {
          let loginUser;
          try {
               loginUser = await JSON.parse(localStorage.getItem("loginUser") || "[]");
               // console.log("loginUser", loginUser.refresh);
               dispatch(actions.fetchLogoutUser(loginUser.access));
          }
          catch (error) {
               console.error(error);
          }
     }

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
               onClick: qwe,
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