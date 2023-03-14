import React, { FC, FormEvent, useState } from "react";
import { useAppSelector } from "@/src/hooks/types";
import styles from "@/src/components/widgets/styles/styles.module.css";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import { WithChildren } from "@/src/types/withChildren";
import { useRouter } from "next/router";
import AccountPageMain from "../features/AccountPage/AccountPageMain/AccountPageMain";
import SettingsTabs from "@/src/components/shared/settingsTabs/SettingsTabs";

interface IAccountWrapper {
     title?: string;
}

const AccountPageWrapper: FC<IAccountWrapper & WithChildren> = ({title, children}) => {

     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);

     const router = useRouter();

     const TABS_CONFIG = [
          {
               id: 1,
               title: "Персональные данные",
               href: {pathname: "/my-account/[slug]/settings",
                    query: { slug: credentials.id}
               },
          },
          {
               id: 2,
               title: "Пароль",
               href: {pathname: "/my-account/[slug]/changepassword",
                    query: { slug: credentials.id}
               },
          },
          {
               id: 3,
               title: "Способ оплаты",
               href: {pathname: "/my-account/[slug]",
                    query: { slug: credentials.id}
               },
          },
     ];

     const [activeTabItem, setActiveTabItem] = useState<number>(1);
     const handleSetActiveTabItem = (id: number) => {
          setActiveTabItem(id);
     };

     return (
          <div className={styles.accountWrapper}>
               <Sidebar />
               <div className={styles.accountContentBlock}>
                    <AccountPageHeader title={title} id={credentials?.id} name={credentials?.name} />
                    {router.route !== "/my-account" && router.route !== "/my-account/[slug]"
                      ?
                      <SettingsTabs config={TABS_CONFIG} activeTabItem={activeTabItem} onClick={handleSetActiveTabItem}/> : null}
                    {children}
               </div>
          </div>
     );
};

export default AccountPageWrapper;
