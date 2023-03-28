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
     page: keyof typeof AccountPageTypes;
}

const settingsRoute = "/my-account/profile/settings";
const changePasswordRoute = "/my-account/profile/changepassword";
const paymentRoute = "/my-account/profile/payment";
const firstTab = 1;
const secondTab = 2;
const thirdTab = 3;

const AccountPageWrapper: FC<IAccountWrapper & WithChildren> = ({ page, children }) => {
     const id = useAppSelector((state) => state.credentialsSlice.credentials.id);
     const name = useAppSelector((state) => state.credentialsSlice.credentials.name);
     const dispatch = useAppDispatch();
     const router = useRouter();

     React.useEffect(() => {
          const storageData = JSON.parse(localStorage.getItem("credentials") ?? "");
          storageData && dispatch(setCredentials(storageData));
     }, []);

     const TABS_CONFIG = [
          {
               id: 1,
               title: "Персональные данные",
               href: `/my-account/profile/personaldata`,
          },
          {
               id: 2,
               title: "Пароль",
               href: "/my-account/profile/changepassword",
          },
          {
               id: 3,
               title: "Способ оплаты",
               href: "/my-account/profile/payment",
          },
     ];

     const [activeTabItem, setActiveTabItem] = useState<number>(firstTab);

     useEffect(() => {
          switch (router.route) {
               case settingsRoute:
                    return setActiveTabItem(firstTab);
               case changePasswordRoute:
                    return setActiveTabItem(secondTab);
               case paymentRoute:
                    return setActiveTabItem(thirdTab);
               default:
                    setActiveTabItem(firstTab);
          }
     }, [router]);

     return (
          <div className={styles.accountWrapper}>
               <Sidebar />
               <div className={styles.accountContentBlock}>
                    <AccountPageHeader page={page} id={id} name={name} />
                    {page === "profile_settings_password" || page ===
                    "profile_settings_personalData" ? (
                         <SettingsTabs config={TABS_CONFIG} activeTabItem={activeTabItem} />
                    ) : null}
                    {children}
               </div>
          </div>
     );
};

export default AccountPageWrapper;
