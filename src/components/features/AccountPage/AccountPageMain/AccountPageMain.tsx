import React, { useEffect } from "react";

import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/MyAccountPageComponents/solutions/Solutions";
import TemplateSelections from "@/src/components/entities/MyAccountPageComponents/templateselections/TemplateSelections";
import SearchHistory from "@/src/components/entities/MyAccountPageComponents/searchHistory/SearchHistory";
import { useAppSelector } from "@/src/hooks/types";
import SelectInAccount from "@/src/components/entities/MyAccountPageComponents/selectInAccount/SelectInAccount";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import Rates from "@/src/components/entities/TemplatesPageComponents/rates/Rates";

interface IAccountPageMain {
    page: keyof typeof AccountPageTypes;
}

const AccountPageMain: React.FC<IAccountPageMain> = ({ page }) => {
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
        </main>
    );
};

export default AccountPageMain;
