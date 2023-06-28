import React from "react";
import BlockOurAdvantages from "@/src/components/entities/blockOurAdvantages/BlockOurAdvantages";
import styles from "@/src/components/features/HomePage/Main/Main.module.css";
import BlockConfidence from "@/src/components/entities/blockConfidence/BlockConfidence";

const Main = () => {
     return (
          <div className={styles.main}>
               <BlockOurAdvantages/>
               <BlockConfidence/>
          </div>
     );
};

export default Main;