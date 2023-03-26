import React, { useEffect } from "react";

import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/solutions/Solutions";
import TemplateSelections from "@/src/components/entities/templateselections/TemplateSelections";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";
import { useAppSelector } from "@/src/hooks/types";
import SelectInAccount from "@/src/components/entities/selectInAccount/selectInAccount";
import FunctionalBlock from "@/src/components/entities/functionalBlock/FunctionalBlock";


const AccountPageMain = () => {
     const { name } = useAppSelector((state) => state.credentialsSlice.credentials);

     // useEffect(() => {
     //      console.log(name);
     // }, [name]);

     return (
          <main>
               <InputSearchField />
               <SelectInAccount />
               <Solutions />
               <FunctionalBlock/>
               <TemplateSelections />
               <SearchHistory title={"История поиска"} />
          </main>
     );
};

export default AccountPageMain;