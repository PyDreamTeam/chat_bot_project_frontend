import React, { FC, ReactNode } from "react";
import Footer from "@/src/components/HomepageWrapper/Footer/Footer";
import Header from "@/src/components/HomepageWrapper/Header/Header";
import { WithChildren } from "@/src/types/withChildren";

const HomepageWrapper: FC<WithChildren> = ({ children }) => {
     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     );
};

export default HomepageWrapper;
