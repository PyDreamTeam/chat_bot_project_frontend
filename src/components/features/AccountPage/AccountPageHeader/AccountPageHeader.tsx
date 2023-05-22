import React, { FC, FormEvent, useState } from "react";
import styles from "./AccountPageHeader.module.css";
import UserInfo from "@/src/components/features/AccountPage/AccountPageHeader/UserMenu/UserInfo";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import Link from "next/link";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";
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
     const dispatch = useAppDispatch();

     const { auth_token } = useAppSelector((state) => state.credentialsSlice.credentials);

     const handleOpenProfile = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          router.replace({
               pathname: "/my-account/profile",
          });
     };

     const handleUserLogOut = async () => {
          localStorage.removeItem("credentials");
          await fetch("http://34.88.253.142:8000/auth/token/destroy/", {
               method: "POST",
               headers: {
                    Authorization: `Token ${auth_token}`,
               },
          })
               .then((response) => {
                    if (response.status === 204) {
                         router.push("/home");
                         dispatch(removeCredentials());
                    }
               })
               .catch((e) => console.log(e));
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
               <UserInfo
                    handleLogOut={handleUserLogOut}
                    profileOnClick={handleOpenProfile}
                    isOpen={open}
                    onClick={handleToggleBurgerMenu}
                    userName={name}
               />
          </header>
     );
};

export default AccountPageHeader;