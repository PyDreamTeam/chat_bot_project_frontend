import React from "react";
import { SelectionBot } from "@/src/components/features/HomePage/Main/SelectionBot/SelectionBot";
import styles from "@/src/components/features/HomePage/Main/Main.module.css";
import BlockOurAdvantages from "@/src/components/features/HomePage/Main/blockOurAdvantages/BlockOurAdvantages";
import BlockConfidence from "@/src/components/features/HomePage/Main/blockConfidence/BlockConfidence";
import BlockFeedback from "@/src/components/features/HomePage/Main/blockFeedback/BlockFeedback";
import BlockVideo from "@/src/components/features/HomePage/Main/blockVideo/BlockVideo";
import { BlockSelectionBot } from "./blockSelectionBot/BlockSelectionBot";

const Main = () => {
     return (
          <div className={styles.main}>
               {/* <SelectionBot/> */}
               <BlockSelectionBot />
               <BlockOurAdvantages />
               <BlockVideo />
               <BlockConfidence />
               <BlockFeedback />
          </div>
     );
};

export default Main;
