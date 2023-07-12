import React from "react";

import Header from "@/src/components/features/HomePage/Header/Header";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import FeedBackBlock from "@/src/components/features/HomePage/FeedBackBlock/FeedBackBlock";

export default function FeedbackPage() {
     return (
          <>
               <Header type="start"/>
               <FeedBackBlock/>
               <Footer />
          </>
     );
}