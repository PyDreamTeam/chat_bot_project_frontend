import React from "react";
import {SelectionBot} from "@/src/components/features/HomePage/Main/SelectionBot/SelectionBot";
import styles from "@/src/components/features/HomePage/Main/Main.module.css";
import BlockOurAdvantages from "@/src/components/features/HomePage/Main/blockOurAdvantages/BlockOurAdvantages";
import BlockConfidence from "@/src/components/features/HomePage/Main/blockConfidence/BlockConfidence";
import BlockVideo from "@/src/components/features/HomePage/Main/blockVideo/BlockVideo";
import BlockAboutUs from "@/src/components/features/HomePage/Main/blockAboutUs/BlockAboutUs";


const Main = () => {
     return (
          <div className={styles.main}>
               <SelectionBot/>
               <BlockOurAdvantages/>
               <BlockVideo/>
               <BlockAboutUs/>
               <BlockConfidence/>
          </div>
     );
};

export default Main;