import React, { FC } from "react";

import styles from "./SolutionItem.module.css";
import SelectedOptions from "@/src/components/shared/solutionItem/selectedOptions/SelectedOptions";
import SelectedPlatforms from "@/src/components/shared/solutionItem/selectedPlatforms/SelectedPlatforms";

export interface ISolutionItem {
     title: string;
     description: string;
     typesOfSolution: string[];
     image: string;
     selectedPlatforms: string[];
}

const SolutionItem: FC<ISolutionItem> = ({ title, description, selectedPlatforms, image, typesOfSolution }) => {
     return (
          <div className={styles.solutionItemBlock}>
               <div className={styles.solutionItemLeftBlock}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <SelectedOptions typesOfSolution={typesOfSolution} />
                    <SelectedPlatforms platforms={selectedPlatforms} />
               </div>
               <div className={styles.solutionItemImg} />
          </div>
     );
};

export default SolutionItem;
