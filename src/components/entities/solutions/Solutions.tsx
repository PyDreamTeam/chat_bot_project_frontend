import React from "react";

import styles from "./styles/Solutions.module.css";
import SolutionItem from "@/src/components/shared/solutionItem/SolutionItem";
import { PropsConfig } from "../../shared/solutionItem/PropsConfig";
import uuid from "uuid-random";

const Solutions = () => {
     return (
          <div className={styles.solutionsContainer}>
               {PropsConfig.map((Solution) => (
                    <SolutionItem
                         key={uuid()}
                         typesOfSolution={Solution.typesOfSolution}
                         selectedPlatforms={Solution.selectedPlatforms}
                         image={Solution.img}
                         title={Solution.title}
                         description={Solution.description}
                    />
               ))}
          </div>
     );
};

export default Solutions;