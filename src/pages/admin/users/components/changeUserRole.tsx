import { FC, useState } from "react";

import styles from "../styles/changeRole.module.css";

import Text from "@/src/components/shared/text/Text";
import { Roles } from "@/src/components/shared/createAdmin/RadioButtonGroup/RadioButtonGroup";
import uuid from "uuid-random";
import Cookies from "js-cookie";
import UserRoleMenu from "./userRoleMenu";

interface IUserInfoProps {
    onClick?: any;
    role: string | undefined;
    className?: string;
    id: number;
    disabled: boolean;
}

const ChangeUserRole: FC<IUserInfoProps> = ({
    onClick,
    role = "",
    className = "",
    id,
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleToggleRoleMenu = () => { if (!disabled) setIsOpen((prevState) => !prevState); };
    const tk = JSON.parse(Cookies.get("loginUser") || "[]");
    const token = tk.access;

    const navElements = [
        {
            text: Roles.US,
            onClick: () => {
                const requestValues = { user_role: "US" };
                onClick({ requestValues, token, id });
            },
        },
        {
            text: Roles.AD,
            onClick: () => {
                const requestValues = { user_role: "AD" };
                onClick({ requestValues, token, id });
            },
        },
        {
            text: Roles.MN,
            onClick: () => {
                const requestValues = { user_role: "MN" };
                onClick({ requestValues, token, id });
            },
        },
    ];

    return (
        <div className={`${styles.changeRoleWrapper} ${className}`} key={uuid()} onClick={handleToggleRoleMenu} >
            {role && (
                <div className={styles.blockName}>
                    <Text type={"reg16"} color={"grey"}>
                        {role}
                    </Text>
                </div>
            )}
            <div className={!disabled && isOpen ? styles.headerArrowButtonOpen : styles.headerArrowButton}>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.9998 6.9748C5.86647 6.9748 5.73714 6.9498 5.6118 6.8998C5.48647 6.8498 5.38247 6.78314 5.2998 6.6998L0.699804 2.0998C0.516471 1.91647 0.424805 1.68314 0.424805 1.3998C0.424805 1.11647 0.516471 0.883138 0.699804 0.699804C0.883138 0.516471 1.11647 0.424805 1.3998 0.424805C1.68314 0.424805 1.91647 0.516471 2.0998 0.699804L5.9998 4.5998L9.8998 0.699804C10.0831 0.516471 10.3165 0.424805 10.5998 0.424805C10.8831 0.424805 11.1165 0.516471 11.2998 0.699804C11.4831 0.883138 11.5748 1.11647 11.5748 1.3998C11.5748 1.68314 11.4831 1.91647 11.2998 2.0998L6.6998 6.6998C6.5998 6.7998 6.49147 6.8708 6.3748 6.9128C6.25814 6.9548 6.13314 6.97547 5.9998 6.9748Z"
                        fill="#595F6C"
                    />
                </svg>
            </div>
            {!disabled && isOpen && <UserRoleMenu activeMenu={isOpen} navButtons={navElements} activeBtn={role} />}
        </div>
    );
};

export default ChangeUserRole;
