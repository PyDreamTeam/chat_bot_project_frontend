import React from "react";
import BlockOurAdvantages from "@/src/components/entities/blockOurAdvantages/BlockOurAdvantages";
import styles from "@/src/components/features/HomePage/Main/Main.module.css";

const Main = () => {
     return (
          <div className={styles.main}>
               <BlockOurAdvantages/>
          </div>
     );
};

export default Main;