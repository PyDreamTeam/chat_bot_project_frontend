import React, { useEffect } from "react";

import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/solutions/Solutions";
import TemplateSelections from "@/src/components/entities/templateselections/TemplateSelections";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";
import { useAppSelector } from "@/src/hooks/types";

const AccountPageMain = () => {

     const { name } = useAppSelector((state) => state.credentialsSlice.credentials);

     // useEffect(() => {
     //      console.log(name);
     // }, [name]);
  

     return (
          <main>
               <InputSearchField />
               <Solutions />
               <TemplateSelections/>
               <SearchHistory/>
          </main>
     );
};

export default AccountPageMain;
