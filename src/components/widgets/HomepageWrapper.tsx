import React, { FC } from "react";
import Footer from "@/src/components/features/Footer/Footer";
import Header from "@/src/components/features/Header/Header";
import Main from "../features/Main/Main";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";

import styles from "./HomepageWrapper.module.css";
import HomePageMain from "@/src/components/features/HomePage/HomePageMain/HomePageMain";
import { useAppSelector } from "@/src/hooks/types";

const HomepageWrapper: FC = () => {
     const { email } = useAppSelector((state) => state.credentialsSlice.credentials);

     return (
          <>
               {email ? (
                    <div className={styles.authWrapper}>
                         <Sidebar />
                         <HomePageMain />
                    </div>
               ) : (
                    <>
                         <Header />
                         <Main />
                         <Footer />
                    </>
               )}
          </>
     );
};

export default HomepageWrapper;
