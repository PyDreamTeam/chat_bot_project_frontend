import React, { FC } from "react";

import styles from "./styles/SelectedOptionItem.module.css";
import Text from "@/src/components/shared/textfields/Text";

interface ISelectOption {
     title: string;
}

const SelectedOptionItem: FC<ISelectOption> = ({ title }) => {
     return (
          <div className={styles.selectedOptionBlock}>
               <Text type={"reg18"} color={"grey"}>
                    {title}
               </Text>
          </div>
     );
};

export default SelectedOptionItem;