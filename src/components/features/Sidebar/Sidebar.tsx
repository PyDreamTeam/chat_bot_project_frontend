import React, { FC, useEffect, useState } from "react";

import styles from "./Sidebar.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ListSidebar from "@/src/components/entities/lists/listsidebar/ListSidebar";
import { SIDEBAR_CONFIG } from "@/src/components/features/Sidebar/SidebarConfig";
import { useAppDispatch } from "@/src/hooks/types";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";
import { useRouter } from "next/router";
import Link from "next/link";

const myAccountRoute = "/my-account";
const ordersRoute = "/my-account/orders";
const templatesRoute = "/my-account/templates";
const favoritesRoute = "/my-account/favorites";
const faqRoute = "/my-account/faq";
const articlesRoute = "/my-account/articles";
const ratesRoute = "/my-account/rates";

const Sidebar: FC = () => {
    const dispatch = useAppDispatch();
    const [activeTabItem, setActiveTabItem] = useState<number>(1);
    const router = useRouter();

    useEffect(() => {
        switch (router.route) {
            case myAccountRoute:
                return setActiveTabItem(1);
            case ordersRoute:
                return setActiveTabItem(2);
            case templatesRoute:
                return setActiveTabItem(3);
            case favoritesRoute:
                return setActiveTabItem(4);
            case faqRoute:
                return setActiveTabItem(5);
            case articlesRoute:
                return setActiveTabItem(6);
            case ratesRoute:
                return setActiveTabItem(7);
            default:
                setActiveTabItem(1);
        }
    }, [router]);

    const handleSetActiveTabItem = (id: number) => {
        id === 6 && dispatch(removeCredentials());
        setActiveTabItem(id);
    };

    return (
        <aside className={styles.asideWrapper}>
            <Link href="/home">
                <Logo variant={LogoVariantProps.header} />
            </Link>

            <ListSidebar config={SIDEBAR_CONFIG} activeTabItem={activeTabItem} />
        </aside>
    );
};

export default Sidebar;
