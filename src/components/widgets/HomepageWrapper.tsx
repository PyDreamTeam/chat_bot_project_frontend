import React, { FC } from "react";
import Footer from "@/src/components/features/Footer/Footer";
import Header from "@/src/components/features/Header/Header";
import Main from "../features/Main/Main";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";

import styles from "./HomepageWrapper.module.css";
import AuthMain from "@/src/components/features/AuthMain/AuthMain";

const HomepageWrapper: FC = () => {

     const isAuth = true;

     return (
          <>
               {isAuth ?
                 <div className={styles.authWrapper}>
                      <Sidebar />
                      <AuthMain/>
                 </div>
                 :
                 <>
                      <Header />
                      <Main />
                      <Footer />
                 </>
               }
          </>
     );
};

export default HomepageWrapper;
