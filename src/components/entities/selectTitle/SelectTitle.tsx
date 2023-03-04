import React, { FC } from "react";

import TabSelect, { ITabSelect, TabSelectProps } from "@/src/components/shared/tabSelect/TabSelect";

import styles from "./styles/SelectTitle.module.css";

interface ISelectTitle {
     config: ITabSelect[];
     onClick?: (id: number) => void;
}

const SelectTitle: FC<ISelectTitle & TabSelectProps> = ({ config = [], onClick, activeTabSelect }) => {
     return (
          <div className={styles.selectTitle}>
               {config.map((sel) => (
                    <TabSelect
                         activeTabSelect={activeTabSelect}
                         key={sel.id}
                         id={sel.id}
                         title={sel.title}
                         onClick={() => onClick(sel.id)}
                         icon={sel.icon}
                    />
               ))}
          </div>
     );
};

export default SelectTitle;
