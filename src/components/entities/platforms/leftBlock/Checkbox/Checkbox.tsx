import { FC, ChangeEvent } from "react";
import css from "./checkbox.module.css";

interface PropsCheckbox {
    checked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
}

export const Checkbox: FC<PropsCheckbox> = ({checked, disabled, onChange}) => <input type="checkbox" className={css.checkbox} checked={checked} onChange={onChange} disabled={disabled}/>;