import React, { useState } from "react";

import styles from "./HomePageHeader.module.css";

import UserInfo from "@/src/components/features/HomePage/HomePageHeader/UserMenu/UserInfo";


const HomePageHeader = () => {

     const user = "Иван";

     const [open, setOpen] = useState<boolean>(false);
     const handleToggleBurgerMenu = () => setOpen(prevState => !prevState);
    
     return (
          <header className={styles.headerWrapper}>
               <div className={styles.headerLeftBlock}>
                    <h4>Добро пожаловать, {user}! </h4>
               </div>
               <div className={styles.headerRightBlock}>
                    <UserInfo isOpen={open} onClick={handleToggleBurgerMenu} userName={user} />
               </div>
          </header>
     );
};

export default HomePageHeader;
