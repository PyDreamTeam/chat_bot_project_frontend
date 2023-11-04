import React, { FC, ChangeEvent, FocusEvent } from "react";
import style from "./inputGroup.module.css";

interface PropsInputGroup {
    placeholder?: string;
    value?: string;
    isShown?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputGroup: FC<PropsInputGroup> = ({ placeholder, value, isShown, onChange, onBlur, onKeyDown }) => (
    <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={isShown ? style.inputGroup : style.inputGroupHide}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
    />
);

export default InputGroup;
