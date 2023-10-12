import { FC, ChangeEvent } from "react";
import css from "./checkbox.module.css";

interface PropsCheckbox {
    onClick?: () => void;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export const Checkbox: FC<PropsCheckbox> = ({ checked, disabled, onChange, onClick }) => (
    <input
        type="checkbox"
        className={css.checkbox}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        onClick={onClick}
    />
);
