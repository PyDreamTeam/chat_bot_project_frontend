import React, { FC, FormEvent, useState } from "react";
import styles from "./AccountPageHeader.module.css";
import UserInfo from "@/src/components/features/AccountPage/AccountPageHeader/UserMenu/UserInfo";
import { useRouter } from "next/router";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import Link from "next/link";
import { useAppSelector } from "@/src/hooks/types";
import Title from "@/src/components/shared/text/Title";

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
                    {page === "startPage" &&
                        <Title type={"h4"} color={"black"}>
                             {title ? title : `Добро пожаловать, ${name}!`}
                        </Title>}
                    {page === "templates" && (
                         <Link href={"/my-account"}>
                              <Title type={"h4"} color={"black"}>
                                   {"< Aimilogic"}
                              </Title>
                         </Link>
                    )}
                    {(page === "profile_changeData" || page === "profile_templates") &&
                        <Title type={"h4"} color={"black"}>
                             Профиль
                        </Title>}
                    {(page === "profile_settings_password" || page === "profile_settings_personalData") &&
                        <Title type={"h4"} color={"black"}>
                             Настройки
                        </Title>}
               </>
               <UserInfo profileOnClick={handleOpenProfile} isOpen={open} onClick={handleToggleBurgerMenu} userName={name} />
          </header>
     );
};

export default AccountPageHeader;