import React, { FC, ReactNode } from "react";
import Footer from "@/src/components/features/Footer/Footer";
import Header from "@/src/components/features/Header/Header";
import Main from "../features/Main/Main";
import Sidebar from "@/src/components/features/Sidebar/Sidebar";

const HomepageWrapper: FC = () => {
     const isAuth = true;

     return (
          <>
               {isAuth ? <Sidebar /> : <Header />}
               <Main />
               <Footer />
          </>
     );
};

export default HomepageWrapper;
