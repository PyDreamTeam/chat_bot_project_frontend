import React, { FC } from "react";

import styles from "./UserMenuHeader.module.css";

import Link from "next/link";
import uuid from "uuid-random";

interface IUserMenuButton {
  text: string;
  href: string;
  onClick?: () => void;
}

interface IUserMenu {
    activeMenu?: boolean;
    navButtons: Array<IUserMenuButton>;
}



const UserMenuHeader: FC <IUserMenu> = ({activeMenu, navButtons}) => {
     return (
          <ul className={`${styles.menuWrapper} ${activeMenu ? styles.active : null}`}>
               {navButtons.map((button) => (
                    <Link className={styles.navigateButton} key={uuid()} href={button.href} onClick={button.onClick}>
                         {button.text}
                    </Link>
               ))}
          </ul>

     );
};

export default UserMenuHeader;
