import React, { FC, useEffect } from "react";
import styles from "./styles/ListSidebar.module.css";
import Cookies from "js-cookie";
import TabItem, { ITabItem, TabItemProps } from "../../../shared/tabs/tabitem/TabItem";
import { useLogoutUserMutation, useVerifyUserMutation } from "@/src/store/services/userAuth";
import { useRouter } from "next/router";
import { headerArrow } from "@/src/components/features/AccountPage/AccountPageHeader/img/SvgConfig";

interface IListSidebar {
    config: ITabItem[];
}

const ListSidebar: FC<IListSidebar & TabItemProps> = ({ config = [], activeTabItem }) => {
    const [logoutUser, { isSuccess: isSuccessLogout }] = useLogoutUserMutation();
    const [verifyUser, { isError }] = useVerifyUserMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const route = useRouter();

    useEffect(() => {
        if (isSuccessLogout) {
            Cookies.remove("loginUser");
            verifyUser(token.refresh);
        }
    }, [isSuccessLogout]);

    useEffect(() => {
        if (isError) {
            route.push("/sign-in");
        }
    }, [isError]);

    return (
        <nav className={styles.list}>
            {config.map((tab) => (
                <TabItem
                    href={tab.href}
                    activeTabItem={activeTabItem}
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    icon={tab.icon}
                />
            ))}
        </nav>
    );
};

export default ListSidebar;
