import React, { FC, FormEvent, MouseEventHandler } from "react";
import styles from "../styles/changeRole.module.css";
import uuid from "uuid-random";

interface IUserMenuButton {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface IUserMenu {
    activeMenu?: boolean;
    navButtons: Array<IUserMenuButton>;
    activeBtn: string;
}

const UserRoleMenu: FC<IUserMenu> = ({ activeMenu, navButtons, activeBtn }) => {
    return (
        <div className={`${styles.menuWrapper} ${activeMenu ? styles.active : null}`}>
            {navButtons?.map(
                (button) =>
                    button.text !== activeBtn && (
                        <button
                            className={styles.navigateButton}
                            key={uuid()}
                            onClick={button.onClick}
                        >
                            {button.text}
                        </button>
                    )
            )}
        </div>
    );
};

export default UserRoleMenu;
