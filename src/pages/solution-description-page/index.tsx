import React from "react";

import Header from "@/src/components/features/HomePage/Header/Header";
import SolutionDescriptionPade from "@/src/components/features/SolutionDescriptionPade/SolutionDescriptionPade";
import Footer from "@/src/components/features/HomePage/Footer/Footer";

export default function SolutionDescriptionPage() {
     return (
          <>
               <Header type="start"/>
               <SolutionDescriptionPade/>
               <Footer />
          </>
     );
}