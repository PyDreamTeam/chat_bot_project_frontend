import React, { FC } from "react";

import styles from "./styles/TabCheck.module.css";
import Text from "@/src/components/shared/text/Text";

export interface ITabCheck {
     id: number;
     icon: React.ReactNode;
     title: string;
}

const TabCheck: FC<ITabCheck> = ({ id, icon, title }) => {
     return (
          <div key={id} className={styles.setting}>
               {icon}
               <Text type={"reg24"} color={"black"}>
                    {title} 
               </Text>
          </div>
     );
};

export default TabCheck;