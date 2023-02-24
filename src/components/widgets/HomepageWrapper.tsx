import React, { FC, ReactNode } from "react";
import Footer from "@/src/components/features/Footer/Footer";
import Header from "@/src/components/features/Header/Header";
import Main from "../features/Main/Main";

const HomepageWrapper: FC = () => {
     return (
          <>
               <Header />
               <Main />
               <Footer />
          </>
     );
};

export default HomepageWrapper;
