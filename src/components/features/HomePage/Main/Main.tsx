import React from "react";
import { SelectionBot } from "@/src/components/features/HomePage/Main/SelectionBot/SelectionBot";
import styles from "@/src/components/features/HomePage/Main/Main.module.css";
import BlockOurAdvantages from "@/src/components/features/HomePage/Main/blockOurAdvantages/BlockOurAdvantages";
import BlockConfidence from "@/src/components/features/HomePage/Main/blockConfidence/BlockConfidence";
import BlockFeedback from "@/src/components/features/HomePage/Main/blockFeedback/BlockFeedback";
import BlockVideo from "@/src/components/features/HomePage/Main/blockVideo/BlockVideo";
import BlockAboutUs from "@/src/components/features/HomePage/Main/blockAboutUs/BlockAboutUs";
import { BlockSelectionBot } from "./blockSelectionBot/BlockSelectionBot";
import { BlockTariffPlan } from "./blockTariffPlan/BlockTariffPlan";

const Main = () => {
     return (
          <div className={styles.main}>
               {/* <SelectionBot/> */}
               <BlockSelectionBot/>
               <BlockOurAdvantages/>
               <BlockVideo/>
               <BlockAboutUs/>
               <BlockConfidence/>
               <BlockFeedback />
               <BlockTariffPlan />
          </div>
     );
};

export default Main;
