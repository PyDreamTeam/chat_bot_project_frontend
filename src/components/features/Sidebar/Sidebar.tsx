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
const selectionsRoute = "/my-account/selection";
const ordersRoute = "/my-account/orders";
const favoritesRoute = "/my-account/favorites";
const historyRoute = "/my-account/history";
const faqRoute = "/my-account/faq";
const solutionRoute = "/solutions";
const platformRoute = "/platforms";

const Sidebar: FC = () => {
    const dispatch = useAppDispatch();
    const [activeTabItem, setActiveTabItem] = useState<number>(1);
    const router = useRouter();

    useEffect(() => {
        switch (router.route) {
            case myAccountRoute:
                return setActiveTabItem(1);
            case selectionsRoute:
                return setActiveTabItem(2);
            case solutionRoute:
                return setActiveTabItem(3);
            case platformRoute:
                return setActiveTabItem(4);
            case ordersRoute:
                return setActiveTabItem(5);
            case favoritesRoute:
                return setActiveTabItem(6);
            case historyRoute:
                return setActiveTabItem(7);
            case faqRoute:
                return setActiveTabItem(8);
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
                <Logo variant={LogoVariantProps.admin} />
            </Link>
            <div className={styles.link}>
                <ListSidebar config={SIDEBAR_CONFIG} activeTabItem={activeTabItem} />
            </div>
        </aside>
    );
};

export default Sidebar;
