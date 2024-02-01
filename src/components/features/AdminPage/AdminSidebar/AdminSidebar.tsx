import React, { FC, useEffect, useState } from "react";

import styles from "./AdminSidebar.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { sidebarData } from "./AdminSidebarData";
import SubMenu from "./SubMenu";
import { usePathname } from "next/navigation";

const AdminSidebar: FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <aside className={styles.asideWrapper}>
            <Link href="/home" className={styles.logoLink}>
                <Logo variant={LogoVariantProps.admin} />
            </Link>

            {sidebarData.map((item, index) => {
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
