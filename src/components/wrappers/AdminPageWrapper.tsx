import React, { FC } from "react";
import { WithChildren } from "@/src/shared/types/withChildren";

import styles from "@/src/components/wrappers/styles/styles.module.css";

import SidebarOfficeAdmin from "@/src/components/features/AdminPage/SidebarOfficeAdmin/SidebarOfficeAdmin";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import { useAppSelector } from "@/src/hooks/types";
import Cookies from "js-cookie";
import { useDataUserQuery } from "@/src/store/services/userAuth";

interface IAccountWrapper {
    page: keyof typeof AccountPageTypes;
}

const AdminPageWrapper: FC<IAccountWrapper & WithChildren> = ({ page, children }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

    return (
        <div className={styles.accountWrapper}>
            <SidebarOfficeAdmin />
            <div className={styles.accountContentBlock}>
                <AccountPageHeader page={page} name={data?.first_name} />
                {children}
            </div>
        </div>
    );
};

export default AdminPageWrapper;
