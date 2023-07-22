import React from "react";
import styles from "@/src/components/features/HomePage/Main/Main.module.css";
import BlockOurAdvantages from "@/src/components/features/HomePage/Main/blockOurAdvantages/BlockOurAdvantages";
import BlockConfidence from "@/src/components/features/HomePage/Main/blockConfidence/BlockConfidence";
import BlockFeedback from "@/src/components/features/HomePage/Main/blockFeedback/BlockFeedback";
import BlockVideo from "@/src/components/features/HomePage/Main/blockVideo/BlockVideo";
import BlockAboutUs from "@/src/components/features/HomePage/Main/blockAboutUs/BlockAboutUs";
import { BlockSelectionBot } from "./blockSelectionBot/BlockSelectionBot";
import { BlockTariffPlan } from "./blockTariffPlan/BlockTariffPlan";
import BlockFAQ from "@/src/components/features/HomePage/Main/blockFAQ/BlockFAQ";
import BlockSolution from "@/src/components/features/HomePage/Main/blockSolution/BlockSolution";
import BlockPlatform from "./blockPlatform/BlockPlatform";

const Main = () => {
     return (
          <div className={styles.main}>
               <BlockSelectionBot />
               <BlockOurAdvantages />
               <BlockVideo />
               <BlockSolution />
               <BlockPlatform />
               <BlockAboutUs />
               <BlockConfidence />
               <BlockFeedback />
               <BlockTariffPlan />
               <BlockFAQ />
          </div>
     );
};

export default Main;
