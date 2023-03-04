import React from "react";

import styles from "./HomePageMain.module.css";
import HomePageHeader from "@/src/components/features/HomePage/HomePageHeader/HomePageHeader";
import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/solutions/Solutions";

const HomePageMain = () => {
     return (
          <main className={styles.mainContentBlock}>
               <HomePageHeader />
               <InputSearchField />
               <Solutions />
          </main>
     );
};

export default HomePageMain;
