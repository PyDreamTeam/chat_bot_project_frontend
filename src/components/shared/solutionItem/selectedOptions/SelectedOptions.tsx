import React, { FC } from "react";

import styles from "./styles/SelectedOptions.module.css";
import uuid from "uuid-random";
import SelectedOptionItem from "@/src/components/shared/solutionItem/selectedOptions/selectedOptionItem/SelectedOptionItem";

export interface IFilteredProps {
     typesOfSolution: string[];
}

const SelectedOptions: FC<IFilteredProps> = ({ typesOfSolution }) => {
     return (
          <ul className={styles.optionsBlock}>
               {typesOfSolution.map((title) => (
                    <SelectedOptionItem key={uuid()} title={title} />
               ))}
          </ul>
     );
};

export default SelectedOptions;