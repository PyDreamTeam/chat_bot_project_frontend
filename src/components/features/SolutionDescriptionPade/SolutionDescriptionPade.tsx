import React from "react";

import BlockComplexFunnel from "@/src/components/features/SolutionDescriptionPade/blockComplexFunnel/BlockComplexFunnel";

import styles from "./SolutionDescriptionPade.module.css";
import BlockShotDescription  from "@/src/components/features/SolutionDescriptionPade/blockShotDescription/BlockShotDescription";
import BlockGreatSolutions  from "@/src/components/features/SolutionDescriptionPade/blockGreatSolutions/BlockGreatSolutions";
import BlockHowItWorks from "@/src/components/features/SolutionDescriptionPade/blockHowItWorks/BlockHowItWorks";
import BlockFunnelBenefits from "@/src/components/features/SolutionDescriptionPade/blockBenefitsFunnel/BlockBenefitsFunnel";
import BlockTasksBySteps from "@/src/components/features/SolutionDescriptionPade/blockTasksBySteps/BlockTasksBySteps";


const SolutionDescriptionPade = () => {
     return (
          <div className={styles.wrapper}>
               <BlockComplexFunnel/>
               <BlockShotDescription/>
               <BlockGreatSolutions/>
               <BlockFunnelBenefits/>
               <BlockHowItWorks/>
               <BlockTasksBySteps/>
          </div>
     );
};

export default SolutionDescriptionPade;