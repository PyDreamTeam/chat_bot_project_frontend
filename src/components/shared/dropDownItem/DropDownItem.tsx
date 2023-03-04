import React, {FC} from "react";
import styles from "@/src/components/shared/tabSelect/styles/tabSelect.module.css";

export interface IDropDownItem {
     id?: number;
     type: string;
     onChange?: any;
     isChecked?: any;
}

export interface DropDownItemProps {
     activeDropDownItem?: number;
}

const DropDownItem:FC<IDropDownItem & DropDownItemProps> = ({id,type, activeDropDownItem}) => {
     return (
          <div className={`${styles.radio} ${activeDropDownItem === id ? styles.active : null}`}>
               {type}
          </div>
     );
};

export default DropDownItem;