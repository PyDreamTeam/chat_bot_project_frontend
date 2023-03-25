import React, { FC, useState } from "react";

import styles from "./Sidebar.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ListSidebar from "@/src/components/entities/lists/listsidebar/ListSidebar";
import { SIDEBAR_CONFIG } from "@/src/components/features/Sidebar/pictures/SidebarConfig";
import { useAppDispatch } from "@/src/hooks/types";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";

const Sidebar: FC = () => {
     const dispatch = useAppDispatch();
     const [activeTabItem, setActiveTabItem] = useState<number>(1);
     const handleSetActiveTabItem = (id: number) => {
          id === 7 && dispatch(removeCredentials());
          setActiveTabItem(id);
     };

     return (
          <aside className={styles.asideWrapper}>
               <Logo variant={LogoVariantProps.header} />
               <ListSidebar config={SIDEBAR_CONFIG} onClick={handleSetActiveTabItem} activeTabItem={activeTabItem} />
          </aside>
     );
};

export default Sidebar;
