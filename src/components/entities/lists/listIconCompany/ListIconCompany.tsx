import React, {FC} from "react";

import TabIconCompany, { IIcon } from "@/src/components/shared/tabs/tabIconCompany/TabIconCompany";

import styles from "./styles/ListIconCompany.module.css";

interface IIconCompany {
  config: IIcon[];
}
const ListIconCompany: FC<IIconCompany> = ({config=[]}) => {
     return (
          <div className={styles.icons}>
               {config.map((img) => (
                    <TabIconCompany
                         id={img.id}
                         key={img.id}
                         icon={img.icon}
                    />
               ))}
          </div>
     );
};

export default ListIconCompany;