import React from "react";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Header from "@/src/components/features/HomePage/Header/Header";
import Main from "../features/HomePage/Main/Main";
import { useAppSelector } from "@/src/hooks/types";

const HomepageWrapper = () => {
     const { id } = useAppSelector((state) => state.credentialsSlice.credentials);
     console.log(id);

     return (
          <>
               <Header />
               <Main />
               <Footer />
          </>
     );
};

export default HomepageWrapper;
