import React, { FC, ReactNode } from "react";
import Footer from "@/src/components/common/MainWrapper/Footer/Footer";
import Header from "@/src/components/common/MainWrapper/Header/Header";
import { WithChildren } from "@/src/types/withChildren";

const MainWrapper: FC<WithChildren> = ({ children }) => {
     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     );
};

export default MainWrapper;
