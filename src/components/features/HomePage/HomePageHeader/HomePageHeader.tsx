import React, { useState } from "react";

import styles from "./HomePageHeader.module.css";

import UserInfo from "@/src/components/features/HomePage/HomePageHeader/UserMenu/UserInfo";
import { useAppSelector } from "@/src/hooks/types";

const HomePageHeader = () => {
     const { email, name, password, picture, token } = useAppSelector((state) => state.credentialsSlice.credentials);

     const [open, setOpen] = useState<boolean>(false);
     const handleToggleBurgerMenu = () => setOpen((prevState) => !prevState);

     return (
          <header className={styles.headerWrapper}>
               <div className={styles.headerLeftBlock}>
                    <h4>Добро пожаловать, {name}! </h4>
               </div>
               <div className={styles.headerRightBlock}>
                    <UserInfo avatarUrl={picture} isOpen={open} onClick={handleToggleBurgerMenu} userName={name} />
               </div>
          </header>
     );
};

export default HomePageHeader;
