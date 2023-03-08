import React, { FC } from "react";

import styles from "./UserMenuHeader.module.css";

import uuid from "uuid-random";

interface IUserMenuButton {
  text: string;
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
                    <button className={styles.navigateButton} key={uuid()} onClick={button.onClick}>
                         {button.text}
                    </button>
               ))}
          </ul>

     );
};

export default UserMenuHeader;
