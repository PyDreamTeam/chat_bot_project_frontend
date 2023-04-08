import AccordionBlock from "@/src/components/entities/TemplatesPageComponents/accordionBlock/AccordionBlock";
import DescriptionBlock from "@/src/components/entities/TemplatesPageComponents/descriptionBlock/DescriptionBlock";
import FunctionalBlock from "@/src/components/entities/TemplatesPageComponents/functionalBlock/FunctionalBlock";
import Rates from "@/src/components/entities/TemplatesPageComponents/rates/Rates";
import { PropsConfig } from "@/src/components/shared/solutionItem/PropsConfig";
import SolutionItem from "@/src/components/shared/solutionItem/SolutionItem";
import React from "react";
import uuid from "uuid-random";
import image from "@/src/components/entities/TemplatesPageComponents/descriptionBlock/img/Aimylogic_ 1.png";
import ButtonSubmit from "@/src/components/shared/buttons/ButtonSubmit";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";

const Templates = () => {
     const RatesConfig = [
          {
               title: "Basic",
               price: 19000,
               descriptions: ["Описание тарифа, его особенности", "Описание тарифа, его особенности", "Описание тарифа, его особенности"],
          },
          {
               title: "Basic",
               price: 19000,
               descriptions: ["Описание тарифа, его особенности", "Описание тарифа, его особенности", "Описание тарифа, его особенности"],
          },
          {
               title: "Basic",
               price: 19000,
               descriptions: ["Описание тарифа, его особенности", "Описание тарифа, его особенности", "Описание тарифа, его особенности"],
          },
     ];

     return (
          <AccountPageWrapper page="templates">
               <DescriptionBlock
                    logo={PropsConfig[0].logo}
                    title={PropsConfig[0].title}
                    description={PropsConfig[0].description}
                    image={image}
                    selectedPlatforms={PropsConfig[0].selectedPlatforms}
               />
               <AccordionBlock />
               <FunctionalBlock />
               <Rates cards={RatesConfig} />
          </AccountPageWrapper>
     );
};

export default Templates;
