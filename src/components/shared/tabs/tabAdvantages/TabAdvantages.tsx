import React, { FC } from "react";
import { Advantages } from "@/src/types";
import styles from "./TabAdvantages.module.css";

const TabAdvantages: FC<Advantages> = ({icon, text}) => {
     return (
          <div className={styles.wrapper}>
               {icon}
               {text}
          </div>
     );
};

export default TabAdvantages;