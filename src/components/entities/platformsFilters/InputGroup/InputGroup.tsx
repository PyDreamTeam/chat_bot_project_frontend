import React, { FC, ChangeEvent, FocusEvent, useState, MutableRefObject } from "react";
import { useRef } from "react";
import styles from "./style.module.css";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";

interface PropsInputGroup {
    placeholder?: string;
    value?: string;
    isShown?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSubmit?: (inputValue: string | undefined) => void | undefined;
    onCancel?: () => void;
}

const InputGroup: FC<PropsInputGroup> = ({
    placeholder,
    value,
    isShown,
    onChange,
    onBlur,
    onKeyDown,
    onSubmit,
    onCancel,
}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    return (
        <div
            className={`${styles.container}
                    ${!isShown ? styles.inputGroupHide : null}
                    `}
        >
            <input
                ref={inputRef}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={onBlur}
                className={`${styles.inputGroup}
                    ${!isShown ? styles.inputGroupHide : styles.inputGroupNew}
                    `}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
            />
            <div className={styles.buttonsContainer}>
                <ButtonSmallSecondary
                    active={true}
                    negative={true}
                    type={"button"}
                    onClick={() => {
                        inputRef.current.value = "";
                        if (onCancel) onCancel();
                    }}
                >
                    Отмена
                </ButtonSmallSecondary>
                <ButtonSmallSecondary
                    active={true}
                    type={"button"}
                    onClick={() => {
                        if (onSubmit) onSubmit(inputValue);
                        inputRef.current.value = "";
                    }}
                >
                    Добавить
                </ButtonSmallSecondary>
            </div>
        </div>
    );
};

export default InputGroup;
