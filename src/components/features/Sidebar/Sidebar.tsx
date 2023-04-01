import React, { FC, useEffect, useState } from "react";

import styles from "./Sidebar.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ListSidebar from "@/src/components/entities/lists/listsidebar/ListSidebar";
import { SIDEBAR_CONFIG } from "@/src/components/features/Sidebar/img/SidebarConfig";
import { useAppDispatch } from "@/src/hooks/types";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";
import { useRouter } from "next/router";

const myAccountRoute = "/my-account";
const templatesRoute = "/my-account/templates";
const favoritetRoute = "/my-account/favorites";
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
               case templatesRoute:
                    return setActiveTabItem(2);
               case favoritetRoute:
                    return setActiveTabItem(3);
               case faqRoute:
                    return setActiveTabItem(4);
               case articlesRoute:
                    return setActiveTabItem(5);
               case ratesRoute:
                    return setActiveTabItem(6);
               default:
                    setActiveTabItem(1);
          }
     }, [router]);

     const handleSetActiveTabItem = (id: number) => {
          id === 7 && dispatch(removeCredentials());
          setActiveTabItem(id);
     };

     return (
          <aside className={styles.asideWrapper}>
               <Logo variant={LogoVariantProps.header} />
               <ListSidebar config={SIDEBAR_CONFIG} activeTabItem={activeTabItem} />
          </aside>
     );
};

export default Sidebar;