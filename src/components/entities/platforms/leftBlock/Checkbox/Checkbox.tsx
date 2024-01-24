import { FC, ChangeEvent } from "react";
import css from "./checkbox.module.css";

interface PropsCheckbox {
    onClick?: () => void;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    defaultChecked?: boolean;
}

export const Checkbox: FC<PropsCheckbox> = ({ checked, disabled, onChange, onClick, defaultChecked }) => (
    <input
        type="checkbox"
        className={css.checkbox}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        onClick={onClick}
    />
);
