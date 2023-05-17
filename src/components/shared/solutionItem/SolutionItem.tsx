import React, { FC } from "react";

import styles from "./styles/SolutionItem.module.css";
import SelectedOptions from "@/src/components/shared/solutionItem/selectedOptions/SelectedOptions";
import SelectedPlatforms from "@/src/components/shared/solutionItem/selectedPlatforms/SelectedPlatforms";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";

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
                    <Title type={"h4"} color={"black"}>{title}</Title>
                    <Text type={"reg18"} color={"black"}>{description}</Text>
                    <SelectedOptions typesOfSolution={typesOfSolution} />
                    <SelectedPlatforms platforms={selectedPlatforms} />
               </div>
               <div className={styles.solutionItemImg} />
          </div>
     );
};

export default SolutionItem;