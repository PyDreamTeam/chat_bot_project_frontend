import React, { FC, useEffect, useState } from "react";

import styles from "./SidebarOfficeAdmin.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ListSidebar from "@/src/components/entities/lists/listsidebar/ListSidebar";
import { SIDEBAR_CONFIG } from "@/src/components/features/AdminPage/SidebarOfficeAdmin/img/SidebarOfficeAdminConfig";
import { useAppDispatch } from "@/src/hooks/types";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";
import { useRouter } from "next/router";

const myAccountRoute = "/my-account";
const workAdminAndModeratorRoute = "/my-account/workAdminAndModerator";
const workPlatformsRoute = "/my-account/workPlatforms";
const workSolutionsRoute = "/my-account/workSolutions";
const workMainPageRoute = "/my-account/workMainRage";
const workPersonalAccountUsersRoute = "/my-account/workPersonalAccountUsers";
const settingsRoute = "/my-account/settings";

const SidebarOfficeAdmin: FC = () => {
     const dispatch = useAppDispatch();
     const [activeTabItem, setActiveTabItem] = useState<number>(1);
     const router = useRouter();

     useEffect(() => {
          switch (router.route) {
               case myAccountRoute:
                    return setActiveTabItem(1);
               case workAdminAndModeratorRoute:
                    return setActiveTabItem(2);
               case workPlatformsRoute:
                    return setActiveTabItem(3);
               case workSolutionsRoute:
                    return setActiveTabItem(4);
               case workMainPageRoute:
                    return setActiveTabItem(5);
               case workPersonalAccountUsersRoute:
                    return setActiveTabItem(6);
               case settingsRoute:
                    return setActiveTabItem(7);
               default:
                    setActiveTabItem(1);
          }
     }, [router]);

     const handleSetActiveTabItem = (id: number) => {
          id === 8 && dispatch(removeCredentials());
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