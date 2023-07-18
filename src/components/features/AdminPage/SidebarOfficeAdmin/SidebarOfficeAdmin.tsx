import React, { FC, useEffect, useState } from "react";

import styles from "./SidebarOfficeAdmin.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ListSidebar from "@/src/components/entities/lists/listsidebar/ListSidebar";
import { SIDEBAR_CONFIG } from "@/src/components/features/AdminPage/SidebarOfficeAdmin/img/SidebarOfficeAdminConfig";
import { useAppDispatch } from "@/src/hooks/types";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";
import { useRouter } from "next/router";

const myProfileRoute = "/my-profile";
const adminAndModeratorRoute = "/my-profile/adminAndModerator";
const platformsRoute = "/my-profile/platforms";
const solutionsRoute = "/my-profile/solutions";
const mainPageRoute = "/my-profile/mainPage";
const personalAccountRoute = "/my-profile/personalAccount";
const settingsRoute = "/my-profile/settings";

const SidebarOfficeAdmin: FC = () => {
     const dispatch = useAppDispatch();
     const [activeTabItem, setActiveTabItem] = useState<number>(1);
     const router = useRouter();

     useEffect(() => {
          switch (router.route) {
               case myProfileRoute:
                    return setActiveTabItem(1);
               case adminAndModeratorRoute:
                    return setActiveTabItem(2);
               case platformsRoute:
                    return setActiveTabItem(3);
               case solutionsRoute:
                    return setActiveTabItem(4);
               case mainPageRoute:
                    return setActiveTabItem(5);
               case personalAccountRoute:
                    return setActiveTabItem(6);
               case settingsRoute:
                    return setActiveTabItem(7);
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

export default SidebarOfficeAdmin;