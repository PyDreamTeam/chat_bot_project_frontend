import React from "react";

import styles from "./HomePageMain.module.css";
import HomePageHeader from "@/src/components/features/HomePage/HomePageHeader/HomePageHeader";
import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/solutions/Solutions";
import TemplateSelections from "@/src/components/entities/templateselections/TemplateSelections";
import SelectInAccount from "@/src/components/entities/selectInAccount/selectInAccount";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";


const HomePageMain = () => {
     return (
          <main className={styles.mainContentBlock}>
               <HomePageHeader />
               <InputSearchField />
               <SelectInAccount />
               <Solutions />
               <TemplateSelections/>
               <SearchHistory/>
          </main>
     );
};

export default HomePageMain;