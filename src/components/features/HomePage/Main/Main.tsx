import React from "react";
import {SelectionBot} from "@/src/components/features/HomePage/Main/SelectionBot/SelectionBot";
import styles from "@/src/components/features/HomePage/Main/Main.module.css";
import BlockOurAdvantages from "@/src/components/features/HomePage/Main/blockOurAdvantages/BlockOurAdvantages";
import BlockConfidence from "@/src/components/features/HomePage/Main/blockConfidence/BlockConfidence";


const Main = () => {
     return (
          <div className={styles.main}>
               <SelectionBot/>
               <BlockOurAdvantages/>
               <BlockConfidence/>
          </div>
     );
};

export default Main;