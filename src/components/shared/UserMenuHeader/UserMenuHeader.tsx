import React, { FC } from "react";

import styles from "./UserMenuHeader.module.css";

import Link from "next/link";

interface IUserMenu {
    onClick?: ()=>void;
    activeMenu?: boolean;
}

const UserMenuHeader: FC <IUserMenu> = ({onClick, activeMenu}) => {
     return (
          <ul className={`${styles.menuWrapper} ${activeMenu ? styles.active : null}`}>
               <Link className={styles.navigateButton} href={"/home"}>Профиль</Link>
               <Link className={styles.navigateButton} href={"/home"}>Настройки аккаунта</Link>
               <li className={styles.navigateButton} onClick={onClick}>Выйти</li>
          </ul>

     );
};

export default UserMenuHeader;
