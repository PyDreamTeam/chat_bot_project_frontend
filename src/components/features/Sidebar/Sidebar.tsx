import React, { FC, useState } from "react";

import styles from "./Sidebar.module.css";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ListSidebar from "@/src/components/entities/listsidebar/ListSidebar";
import { SIDEBAR_CONFIG } from "@/src/components/features/Sidebar/pictures/SidebarConfig";

const Sidebar: FC = () => {
     const [activeTabItem, setActiveTabItem] = useState<number>(1);
     const handleSetActiveTabItem = (id: number) => {
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
