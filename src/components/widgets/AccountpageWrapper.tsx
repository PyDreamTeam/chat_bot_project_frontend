import React, { FC, FormEvent, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/src/hooks/types";
import styles from "@/src/components/widgets/styles/styles.module.css";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import { WithChildren } from "@/src/shared/types/withChildren";
import { useRouter } from "next/router";
import SettingsTabs from "@/src/components/shared/settingsTabs/SettingsTabs";
import AccountPageMain from "../features/AccountPage/AccountPageMain/AccountPageMain";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import { setCredentials } from "@/src/store/reducers/credentialsSlice";


interface IAccountWrapper {
     title?: string;
     page: keyof typeof AccountPageTypes;
}

const settingsRoute = "/my-account/[slug]/settings";
const changePasswordRoute = "/my-account/[slug]/changepassword";
const paymentRoute = "/my-account/[slug]/payment";
const firstTab = 1;
const secondTab = 2;
const thirdTab = 3;

const AccountPageWrapper: FC<IAccountWrapper & WithChildren> = ({ page, children }) => {
     const id = useAppSelector((state) => state.credentialsSlice.credentials.id);
     const name = useAppSelector((state) => state.credentialsSlice.credentials.name);
     const dispatch = useAppDispatch();

     React.useEffect(() => {
          const storageData = JSON.parse(localStorage.getItem("credentials") ?? "");
          storageData && dispatch(setCredentials(storageData));
     }, []);

     // const TABS_CONFIG = [
     //      {
     //           id: 1,
     //           title: "Персональные данные",
     //           href: { pathname: "/my-account/[slug]/settings", query: { slug: credentials.id } },
     //      },
     //      {
     //           id: 2,
     //           title: "Пароль",
     //           href: { pathname: "/my-account/[slug]/changepassword", query: { slug: credentials.id } },
     //      },
     //      {
     //           id: 3,
     //           title: "Способ оплаты",
     //           href: { pathname: "/my-account/[slug]", query: { slug: credentials.id } },
     //      },
     // ];

     // const [activeTabItem, setActiveTabItem] = useState<number>(firstTab);
     //
     // useEffect(() => {
     //      switch (router.route) {
     //           case settingsRoute:
     //                return setActiveTabItem(firstTab);
     //           case changePasswordRoute:
     //                return setActiveTabItem(secondTab);
     //           case paymentRoute:
     //                return setActiveTabItem(thirdTab);
     //           default:
     //                setActiveTabItem(firstTab);
     //      }
     // }, [router]);

     return (
          <div className={styles.accountWrapper}>
               <Sidebar />
               <div className={styles.accountContentBlock}>
                    <AccountPageHeader page={page} id={id} name={name} />
                    {/*{router.route !== "/my-account" && router.route !== "/my-account/[slug]" ? (*/}
                    {/*     <SettingsTabs config={TABS_CONFIG} activeTabItem={activeTabItem} />*/}
                    {/*) : null}*/}
                    {children}
                    {/*<AccountPageHeader page={page} id={id} name={name} />*/}
                    {/*{children}*/}
                    {/*<AccountPageMain page={page} />*/}
               </div>
          </div>
     );
};

export default AccountPageWrapper;
