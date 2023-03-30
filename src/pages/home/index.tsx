import Head from "next/head";
import React from "react";
import HomepageWrapper from "@/src/components/wrappers/HomepageWrapper";

export default function Home() {
     return (
          <>
               <Head>
                    <title>ChatBot | Home</title>
               </Head>
               <HomepageWrapper />
          </>
     );
}
