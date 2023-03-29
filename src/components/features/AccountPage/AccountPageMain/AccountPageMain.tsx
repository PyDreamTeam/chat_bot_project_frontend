import React, { useEffect } from "react";

import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/solutions/Solutions";
import TemplateSelections from "@/src/components/entities/templateselections/TemplateSelections";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";
import { useAppSelector } from "@/src/hooks/types";
import SelectInAccount from "@/src/components/entities/selectInAccount/selectInAccount";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import FunctionalBlock from "@/src/components/entities/functionalBlock/FunctionalBlock";

interface IAccountPageMain {
     page: keyof typeof AccountPageTypes;
}

const AccountPageMain: React.FC<IAccountPageMain> = ({ page }) => {
     const { name } = useAppSelector((state) => state.credentialsSlice.credentials);

     return (
          <main>
               {page === "startPage" && (
                    <>
                         <InputSearchField />
                         <SelectInAccount />
                         <Solutions />
                         <TemplateSelections />
                         <SearchHistory title={"История поиска"} />
                    </>
               )}
               {page === "templates" && (
                    <>
                         <FunctionalBlock />
                    </>
               )}
          </main>
     );
};

export default AccountPageMain;