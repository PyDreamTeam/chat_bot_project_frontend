import React, { FC, FormEvent, useState } from "react";
import styles from "./AccountPageHeader.module.css";
import UserInfo from "@/src/components/features/AccountPage/AccountPageHeader/UserMenu/UserInfo";
import { useRouter } from "next/router";
import { useAppSelector } from "@/src/hooks/types";

interface IHomePageHeader {
     name?: string;
     title?: string;
     id?: string;
}

const AccountPageHeader: FC<IHomePageHeader> = ({ name, title }) => {
     const router = useRouter();
     const [open, setOpen] = useState<boolean>(false);
     const handleToggleBurgerMenu = () => setOpen((prevState) => !prevState);

     const { id } = useAppSelector((state) => state.credentialsSlice.credentials);

     const handleOpenProfile = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          router.replace({
               pathname: "my-account/[slug]",
               query: { slug: id },
          });
     };

     return (
          <header className={styles.headerWrapper}>
               <div className={styles.headerLeftBlock}>
                    <h4>{title ? title : `Добро пожаловать, ${name}!`}</h4>
               </div>
               <div className={styles.headerRightBlock}>
                    <UserInfo profileOnClick={handleOpenProfile} isOpen={open} onClick={handleToggleBurgerMenu} userName={name} />
               </div>
          </header>
     );
};

export default AccountPageHeader;
