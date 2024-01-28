import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from "next/router";
import css from "./style.module.css";
import AccountPageHeader from "../features/AccountPage/AccountPageHeader/AccountPageHeader";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import { WithChildren } from "@/src/shared/types/withChildren";
import SettingsTabs from "@/src/components/shared/settingsTabs/SettingsTabs";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";

interface IAdminContainer {
    title?: string;
    page?: string;
}

export const ContainerAdminFunction: FC<IAdminContainer & WithChildren> = ({ children, title, page }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);
    const router = useRouter();

    const TABS_CONFIG = [
        {
            id: 1,
            title: "Персональные данные",
            href: clientEndpoints.admin.settings.personalData,
        },
        {
            id: 2,
            title: "Пароль",
            href: clientEndpoints.admin.settings.changePassword,
        },
    ];

    const [activeTabItem, setActiveTabItem] = useState<number>(1);

    useEffect(() => {
        switch (router.route) {
            case clientEndpoints.admin.settings.personalData:
                return setActiveTabItem(1);
            case clientEndpoints.admin.settings.changePassword:
                return setActiveTabItem(2);
            default:
                setActiveTabItem(1);
        }
    }, [router]);

    return (
        <div className={css.containerAdminFunction}>
            <AccountPageHeader page="adminPage" title={title} name={`${data?.first_name} ${data?.last_name}`} />
            {page === "personal-data" ? <SettingsTabs config={TABS_CONFIG} activeTabItem={activeTabItem} /> : null}
            {children}
        </div>
    );
};
