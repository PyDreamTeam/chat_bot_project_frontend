import React, { FC, FormEvent, useState } from "react";
import styles from "./AccountPageHeader.module.css";
import UserInfo from "@/src/components/features/AccountPage/AccountPageHeader/UserMenu/UserInfo";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import { AccountPageTypes } from "@/src/shared/enums/my-account";

interface IHomePageHeader {
     name?: string;
     title?: string;
     id?: string | number;
     page: keyof typeof AccountPageTypes;
}

const AccountPageHeader: FC<IHomePageHeader> = ({ name, title, page }) => {
     const router = useRouter();
     const [open, setOpen] = useState<boolean>(false);
     const handleToggleBurgerMenu = () => setOpen((prevState) => !prevState);

     const { id } = useAppSelector((state) => state.credentialsSlice.credentials);

     const handleOpenProfile = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // console.log(router.pathname);
          // router.pathname === "/my-account/[slug]"
          //      ? null
          //      : router.replace({
          //           pathname: "/my-account/[slug]",
          //           query: { slug: id },
          //      });
          router.replace({
               pathname: "/my-account/profile",
               // query: { id: id },
          });
     };

     return (
          <header className={styles.headerWrapper}>
               <div className={styles.headerLeftBlock}>
                    {page === "startPage" && <h4>{title ? title : `Добро пожаловать, ${name}!`}</h4>}
                    {page === "templates" && <h4>TEMPLATES</h4>}
                    {(page === "profile_changeData" || page === "profile_templates") && <h4>Профиль</h4>}
                    {(page === "profile_settings_password" || page === "profile_settings_personalData") && <h4>Настройки</h4>}
               </div>
               <div className={styles.headerRightBlock}>
                    <UserInfo profileOnClick={handleOpenProfile} isOpen={open} onClick={handleToggleBurgerMenu} userName={name} />
               </div>
          </header>
     );
};

export default AccountPageHeader;
