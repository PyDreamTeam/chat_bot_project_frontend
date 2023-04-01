import FunctionalBlock from "@/src/components/entities/functionalBlock/FunctionalBlock";
import Rates from "@/src/components/entities/rates/Rates";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import React from "react";

const Templates = () => {

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
          }];


     return (
          <AccountPageWrapper page="templates">
               <FunctionalBlock/>
               <Rates cards={RatesConfig}/>
          </AccountPageWrapper>
     );
};

export default Templates;
