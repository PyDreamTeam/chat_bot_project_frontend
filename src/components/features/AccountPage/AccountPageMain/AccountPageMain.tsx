import React, { useEffect } from "react";

import InputSearchField from "@/src/components/shared/inputs/InputSearchField";
import Solutions from "@/src/components/entities/solutions/Solutions";
import TemplateSelections from "@/src/components/entities/templateselections/TemplateSelections";
import SearchHistory from "@/src/components/entities/SearchHistory/SearchHistory";
import { useAppSelector } from "@/src/hooks/types";
import SelectInAccount from "@/src/components/entities/selectInAccount/selectInAccount";
import Rates from "@/src/components/entities/rates/Rates";

const AccountPageMain = () => {
     const { name } = useAppSelector((state) => state.credentialsSlice.credentials);

     // useEffect(() => {
     //      console.log(name);
     // }, [name]);

     const RatesConfig = [
          {
               title: "Basic",
               price: 19000,
               descriptions: ["Описание тарифа, его особенности", "Описание тарифа, его особенности", "Описание тарифа, его особенности"]
          },
          {
               title: "Basic",
               price: 19000,
               descriptions: ["Описание тарифа, его особенности", "Описание тарифа, его особенности", "Описание тарифа, его особенности"]
          },
          {
               title: "Basic",
               price: 19000,
               descriptions: ["Описание тарифа, его особенности", "Описание тарифа, его особенности", "Описание тарифа, его особенности"]
          }
     ];

     return (
          <main>
               <InputSearchField />
               <Rates cards={RatesConfig}/>
               <SelectInAccount />
               <Solutions />
               <TemplateSelections />
               <SearchHistory title={"История поиска"} />
          </main>
     );
};

export default AccountPageMain;
