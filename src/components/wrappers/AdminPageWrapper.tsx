import React, {FC} from "react";
import { WithChildren } from "@/src/shared/types/withChildren";

import styles from "@/src/components/wrappers/styles/styles.module.css";

import SidebarOfficeAdmin from "@/src/components/features/AdminPage/SidebarOfficeAdmin/SidebarOfficeAdmin";
import {AccountPageTypes} from "@/src/shared/enums/my-account";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import {useAppSelector} from "@/src/hooks/types";

interface IAccountWrapper {
    page: keyof typeof AccountPageTypes;
}

const AdminPageWrapper: FC<IAccountWrapper & WithChildren> = ({page,children }) => {
     const id = useAppSelector((state) => state.credentialsSlice.credentials.id);
     const name = useAppSelector((state) => state.credentialsSlice.credentials.first_name);
     return (
          <div className={styles.accountWrapper}>
               <SidebarOfficeAdmin />
               <div className={styles.accountContentBlock}>
                    <AccountPageHeader page={page} id={id} name={name} />
                    {children}
               </div>
          </div>
     );
};

export default AdminPageWrapper;