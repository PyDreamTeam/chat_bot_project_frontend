import React, { FC, useEffect, useState } from "react";

import styles from "./AdminSidebar.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { sidebarData } from "./AdminSidebarData";
import SubMenu from "./SubMenu";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";

const AdminSidebar: FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const { data, isSuccess } = useDataUserQuery(token);

    const navigation = sidebarData.slice();

    if (data?.user_role === "AD") {
        navigation.splice(1, 1);
        navigation[0].title = "Кабинет администратора";
    }

    if (data?.user_role === "MN") {
        navigation.splice(1, 1);
        navigation[0].title = "Кабинет модератора";
    }

    if (data?.user_role === "SA") {
        navigation[0].title = "Кабинет суперадминистратора";
    }

    return (
        <aside className={styles.asideWrapper}>
            <Link href="/home" className={styles.logoLink}>
                <Logo variant={LogoVariantProps.admin} />
            </Link>

            {navigation.map((item, index) => {
                let isOpen = false;
                if (item.subNav?.find((item) => item.path === pathname)) {
                    isOpen = true;
                }
                return <SubMenu item={item} id={item.id} key={index} isOpen={isOpen} />;
            })}
        </aside>
    );
};

export default AdminSidebar;
