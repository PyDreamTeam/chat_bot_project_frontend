import React, { FC, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import styles from "@/src/components/widgets/styles/styles.module.css";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import { WithChildren } from "@/src/shared/types/withChildren";
import { useRouter } from "next/router";
import AccountPageMain from "../features/AccountPage/AccountPageMain/AccountPageMain";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import { setCredentials } from "@/src/store/reducers/credentialsSlice";

interface IAccountWrapper {
     title?: string;
     page: keyof typeof AccountPageTypes;
}

const AccountPageWrapper: FC<IAccountWrapper & WithChildren> = ({ page, children }) => {
     const id = useAppSelector((state) => state.credentialsSlice.credentials.id);
     const name = useAppSelector((state) => state.credentialsSlice.credentials.name);
     const dispatch = useAppDispatch();

     React.useEffect(() => {
          const storageData = JSON.parse(localStorage.getItem("credentials") ?? "");
          storageData && dispatch(setCredentials(storageData));
     }, []);

     return (
          <div className={styles.accountWrapper}>
               <Sidebar />
               <div className={styles.accountContentBlock}>
                    <AccountPageHeader page={page} id={id} name={name} />
                    {children}
                    <AccountPageMain page={page} />
               </div>
          </div>
     );
};

export default AccountPageWrapper;
