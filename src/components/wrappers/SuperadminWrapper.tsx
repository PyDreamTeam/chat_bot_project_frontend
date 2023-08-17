import { AccountPageTypes } from '@/src/shared/enums/my-account';
import { WithChildren } from '@/src/shared/types/withChildren';
import { useDataUserQuery } from '@/src/store/services/userAuth';
import Cookies from 'js-cookie';
import React, { FC } from 'react'
import SidebarOfficeAdmin from '../features/AdminPage/SidebarOfficeAdmin/SidebarOfficeAdmin';
import Footer from '../features/HomePage/Footer/Footer';
import styles from './styles/SuperadminPageWrapper.module.css'

interface IAccountWrapper {
     page: keyof typeof AccountPageTypes;
}

const SuperadminPageWrapper: FC<IAccountWrapper & WithChildren> = ({page,children }) => {

     const token = JSON.parse(Cookies.get("loginUser") || "[]");
     const { data } = useDataUserQuery(token);

     return (
          <div className={styles.wrapper}>
               <SidebarOfficeAdmin />
               <div className={styles.main}>
                    {children}
               </div>
               <Footer/>
          </div>
     );
};

export default SuperadminPageWrapper;