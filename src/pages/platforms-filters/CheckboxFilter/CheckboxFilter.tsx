import React, {FC} from "react";
import style from "./checkboxFilter.module.css"; 

interface PropsInput {
    onChange?: () => void;
    checked: boolean;
}
export const Checkbox: FC<PropsInput> = ({ onChange, checked }) => <input type="checkbox" checked={checked} onChange={onChange} className={style.checkbox}/>;