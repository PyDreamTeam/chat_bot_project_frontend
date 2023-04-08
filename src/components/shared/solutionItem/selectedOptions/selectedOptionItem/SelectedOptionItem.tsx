import React, { FC } from "react";

import styles from "./styles/SelectedOptionItem.module.css";

interface ISelectOption {
     title: string;
}

const SelectedOptionItem: FC<ISelectOption> = ({ title }) => {
     return (
          <div className={styles.selectedOptionBlock}>
               <li>{title}</li>
          </div>
     );
};

export default SelectedOptionItem;
