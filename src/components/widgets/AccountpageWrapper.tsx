import React, { FC, FormEvent } from "react";
import { useAppSelector } from "@/src/hooks/types";
import styles from "@/src/components/widgets/styles/styles.module.css";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import { WithChildren } from "@/src/types/withChildren";
import { useRouter } from "next/router";
import AccountPageMain from "../features/AccountPage/AccountPageMain/AccountPageMain";

interface IAccountWrapper {
     title?: string;
}

const AccountPageWrapper: FC<IAccountWrapper & WithChildren> = ({title, children}) => {
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);
     React.useEffect(() => {
          console.log("MY DATA", credentials);
     }, [credentials]);
     const router = useRouter();

     return (
          <div className={styles.accountWrapper}>
               <Sidebar />
               <div className={styles.accountContentBlock}>
                    <AccountPageHeader title={title} id={credentials?.id} name={credentials?.name} />
                    {children}
               </div>
          </div>
     );
};

export default AccountPageWrapper;
