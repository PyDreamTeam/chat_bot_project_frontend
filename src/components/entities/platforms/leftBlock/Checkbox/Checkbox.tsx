import { FC, ChangeEvent } from "react";
import css from "./checkbox.module.css";

interface PropsCheckbox {
    checked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<PropsCheckbox> = ({checked, onChange}) => <input type="checkbox" className={css.checkbox} checked={checked} onChange={onChange}/>;