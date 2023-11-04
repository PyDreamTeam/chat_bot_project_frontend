import React, { FC, ChangeEvent, FocusEvent } from "react";
import styles from "./inputGroup.module.css";

interface PropsInputGroup {
    type: "new" | "edit";
    placeholder?: string;
    value?: string;
    isShown?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputGroup: FC<PropsInputGroup> = ({ type, placeholder, value, isShown, onChange, onBlur, onKeyDown }) => {
    return (
        <div className={styles.container}>
            <input
                defaultValue={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${styles.inputGroup}
                    ${!isShown ? styles.inputGroupHide : type === "edit" ? styles.inputGroupEdit : styles.inputGroupNew}
                    `}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default InputGroup;
