import { FC, FormEvent, useEffect, useState } from "react";

import Avatar from "../../../../shared/Avatar/Avatar";

import styles from "./styles/UserInfo.module.css";

import Text from "@/src/components/shared/text/Text";
import UserMenuHeader from "@/src/components/shared/userMenuHeader/UserMenuHeader";
import AdminMenuHeader from "@/src/components/shared/userMenuHeader/AdminMenuHeader";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import { useRouter } from "next/router";
import { headerArrow } from "../img/SvgConfig";
import Cookies from "js-cookie";
import { useLogoutUserMutation, useVerifyUserMutation } from "@/src/store/services/userAuth";

interface IUserInfoProps {
    profileOnClick?: (e: FormEvent<HTMLFormElement>) => void;
    onClick?: () => void;
    first_name?: string | undefined;
    last_name?: string | undefined;
    avatarUrl?: string;
    className?: string;
    isOpen?: boolean;
}

const UserInfo: FC<IUserInfoProps> = ({
    onClick,
    first_name = "",
    last_name = "",
    avatarUrl,
    className = "",
    isOpen = false,
    profileOnClick,
}) => {
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const userRole = Cookies.get("userRole") || "";

    const [logoutUser, { isSuccess: isSuccessLogout }] = useLogoutUserMutation();
    const [verifyUser, { isSuccess: isSuccessVerify, isError: isErrorVerify }] = useVerifyUserMutation();

    useEffect(() => {
        verifyUser(token.refresh);
    }, []);

    // useEffect(() => {
    //     if (isErrorVerify) {
    //         router.push("/sign-in");
    //     }
    // }, [isSuccessVerify, isErrorVerify]);

    const logout = () => {
        logoutUser(token).then(() => router.push("/home"));
    };

    useEffect(() => {
        if (isSuccessLogout) {
            Cookies.remove("loginUser");
            Cookies.remove("userRole");
            verifyUser(token.refresh);
        }
    }, [isSuccessLogout]);

    const navElements = [
        {
            text: "Профиль",
            onClick() {
                router.replace(clientEndpoints.myAccount.profile.get);
            },
        },
        {
            text: "Заказы",
            onClick() {
                router.replace(clientEndpoints.myAccount.orders.get);
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
            onClick: logout,
        },
    ];

    const navElementsSuperAdmin = [
        {
            text: "Кабинет CуперАдминистратора",
            onClick() {
                router.replace(clientEndpoints.admin.get);
            },
        },
        {
            text: "Настройки",
            onClick() {
                router.replace(clientEndpoints.admin.settings.get);
            },
        },
        {
            text: "Выйти",
            onClick: logout,
        },
    ];

    const navElementsAdmin = [
        {
            text: "Кабинет Администратора",
            onClick() {
                router.replace(clientEndpoints.admin.get);
            },
        },
        {
            text: "Настройки",
            onClick() {
                router.replace(clientEndpoints.admin.settings.get);
            },
        },
        {
            text: "Выйти",
            onClick: logout,
        },
    ];

    const navElementsModerator = [
        {
            text: "Кабинет Модератора",
            onClick() {
                router.replace(clientEndpoints.admin.get);
            },
        },
        {
            text: "Настройки",
            onClick() {
                router.replace(clientEndpoints.admin.settings.get);
            },
        },
        {
            text: "Выйти",
            onClick: logout,
        },
    ];

    return (
        <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
            <div className={styles.avatarCircle}>
                <Avatar type={"forHeader"} url={avatarUrl} />
            </div>
            {first_name && (
                <div className={styles.blockName}>
                    <Text type={"reg18"} color={"black"} className={styles.firstName}>
                        {first_name}
                    </Text>
                    <Text type={"reg18"} color={"black"} className={styles.lastName}>
                        {last_name}
                    </Text>
                </div>
            )}
            <div className={isOpen ? styles.headerArrowButtonOpen : styles.headerArrowButton}>{headerArrow}</div>
            {isOpen && userRole === "SA" && <UserMenuHeader activeMenu={isOpen} navButtons={navElementsSuperAdmin} />}
            {isOpen && userRole === "AD" && <UserMenuHeader activeMenu={isOpen} navButtons={navElementsAdmin} />}
            {isOpen && userRole === "MN" && <UserMenuHeader activeMenu={isOpen} navButtons={navElementsModerator} />}
            {isOpen && userRole === "US" && <UserMenuHeader activeMenu={isOpen} navButtons={navElements} />}
        </div>
    );
};

export default UserInfo;
