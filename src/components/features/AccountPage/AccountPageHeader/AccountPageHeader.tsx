import React, { FC, FormEvent, useState } from "react";
import styles from "./AccountPageHeader.module.css";
import UserInfo from "@/src/components/features/AccountPage/AccountPageHeader/UserMenu/UserInfo";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import Link from "next/link";

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
          router.replace({
               pathname: "/my-account/profile",
          });
     };

     return (
          <header className={styles.headerWrapper}>
               <>
                    {page === "startPage" && <h4>{title ? title : `Добро пожаловать, ${name}!`}</h4>}
                    {page === "templates" && (
                         <Link className={styles.templatesHeaderLink} href={"/my-account"}>
                              {"< TEMPLATES"}
                         </Link>
                    )}
                    {(page === "profile_changeData" || page === "profile_templates") && <h4>Профиль</h4>}
                    {(page === "profile_settings_password" || page === "profile_settings_personalData") && <h4>Настройки</h4>}
               </>
               <UserInfo profileOnClick={handleOpenProfile} isOpen={open} onClick={handleToggleBurgerMenu} userName={name} />
          </header>
     );
};

export default AccountPageHeader;
