import React, { FC, FormEvent, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/src/hooks/types";
import styles from "@/src/components/wrappers/styles/styles.module.css";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import { WithChildren } from "@/src/shared/types/withChildren";
import { useRouter } from "next/router";
import SettingsTabs from "@/src/components/shared/settingsTabs/SettingsTabs";
import AccountPageMain from "../features/AccountPage/AccountPageMain/AccountPageMain";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import { setCredentials } from "@/src/store/reducers/credentialsSlice";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import { CreateUserResponse } from "@/src/types/user";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

interface IAccountWrapper {
    page: keyof typeof AccountPageTypes;
}

const firstTab = 1;
const secondTab = 2;
const thirdTab = 3;

const AccountPageWrapper: FC<IAccountWrapper & WithChildren> = ({ page, children }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const { data } = useDataUserQuery(token);

    // const id = useAppSelector((state) => state.credentialsSlice.credentials.id);

    // const name = useAppSelector((state) => state.credentialsSlice.credentials.first_name);

    const dispatch = useAppDispatch();
    const router = useRouter();

    // React.useEffect(() => {
    //      const storageData = JSON.parse(localStorage.getItem("credentials") ?? "");
    //      storageData && dispatch(setCredentials(storageData));
    // }, []);

    const TABS_CONFIG = [
        {
            id: 1,
            title: "Персональные данные",
            href: clientEndpoints.myAccount.profile.personalData,
        },
        {
            id: 2,
            title: "Пароль",
            href: clientEndpoints.myAccount.profile.changePassword,
        },
        {
            id: 3,
            title: "Способ оплаты",
            href: clientEndpoints.myAccount.profile.payment,
        },
    ];

    const [activeTabItem, setActiveTabItem] = useState<number>(firstTab);

    useEffect(() => {
        switch (router.route) {
            case clientEndpoints.myAccount.profile.personalData:
                return setActiveTabItem(firstTab);
            case clientEndpoints.myAccount.profile.changePassword:
                return setActiveTabItem(secondTab);
            case clientEndpoints.myAccount.profile.payment:
                return setActiveTabItem(thirdTab);
            default:
                setActiveTabItem(firstTab);
        }
    }, [router]);

    return (
        <div className={styles.accountWrapper}>
            <Sidebar />
            <div className={styles.accountContentBlock}>
                <AccountPageHeader page={page} id={data?.email} name={data?.first_name} />
                {page === "profile_settings_password" || page === "profile_settings_personalData" ? (
                    <SettingsTabs config={TABS_CONFIG} activeTabItem={activeTabItem} />
                ) : null}
                {children}
            </div>
        </div>
    );
};

export default AccountPageWrapper;
