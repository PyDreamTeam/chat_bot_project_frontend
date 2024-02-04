import React, { FC, KeyboardEvent, ChangeEvent, FocusEvent, useState, MutableRefObject } from "react";
import { useRef } from "react";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import styles from "./InputFiltersGroup.module.css";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import { useGetPlatformFilterGroupsQuery } from "@/src/store/services/platforms";

interface PropsInputGroup {
    placeholder?: string;
    value?: string;
    isShown?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSubmit?: (inputValue: string) => void;
    onCancel?: () => void;
}

const InputFiltersGroup: FC<PropsInputGroup> = ({ placeholder, isShown, onBlur, onSubmit, onCancel }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    const [isShownErrorShort, setIsShownErrorShort] = useState(false);
    const [isShownErrorExist, setIsShownErrorExist] = useState(false);

    const [isEnableSubmit, setIsEnableSubmit] = useState(false);

    const { data: dataGroups, refetch: refetchGroups } = useGetPlatformFilterGroupsQuery({});
    const groupsTitles: string[] = dataGroups?.results.map((item: any) => item.title);

    const checkGroupName = (name: string) => {
        if (groupsTitles.find((value) => value === name.trim()) === undefined) {
            return true;
        } else return false;
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter" || e.key == "NumpadEnter") {
            const title = (e.target as HTMLInputElement).value;
            if (!(title.trim().length <= 1) || !checkGroupName(title)) {
                if (onSubmit) onSubmit(title);
                inputRef.current.value = "";
                setInputValue("");
            }
        }
    };

    const isValidGroupName = (name: string): boolean => {
        if (name.trim().length <= 1) {
            setIsShownErrorShort(true);
            return false;
        }
        if (!checkGroupName(name)) {
            setIsShownErrorExist(true);
            return false;
        }
        setIsShownErrorShort(false);
        setIsShownErrorExist(false);
        return true;
    };

    return (
        <div
            className={`${styles.container}
                    ${!isShown ? styles.inputGroupHide : null}
                    `}
        >
            <div className={styles.inputContainer}>
                <input
                    ref={inputRef}
                    onChange={(e) => {
                        if (isValidGroupName(e.target.value)) {
                            setInputValue(e.target.value);
                            setIsEnableSubmit(true);
                        } else {
                            setIsEnableSubmit(false);
                        }
                    }}
                    onBlur={onBlur}
                    className={`${styles.inputGroup}
                    ${!isShown ? styles.inputGroupHide : styles.inputGroupNew}
                    `}
                    placeholder={placeholder}
                    onKeyDown={handleKeyDown}
                />
                <div className={`${styles.errorBlock} ${!isShownErrorShort ? styles.errorBlockHide : null}`}>
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                    <Text type="reg16" color="red">
                        Слишком короткое название
                    </Text>
                </div>
                <div className={`${styles.errorBlock} ${!isShownErrorExist ? styles.errorBlockHide : null}`}>
                    <Image src="/sign/errorIcon.svg" width={24} height={24} alt="errorIcon" />
                    <Text type="reg16" color="red">
                        Такая группа уже есть
                    </Text>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <ButtonSmallSecondary
                    active={true}
                    negative={true}
                    type={"button"}
                    onClick={() => {
                        inputRef.current.value = "";
                        if (onCancel) onCancel();
                        setIsShownErrorShort(false);
                        setIsShownErrorExist(false);
                        setIsEnableSubmit(false);
                    }}
                >
                    Отмена
                </ButtonSmallSecondary>
                <ButtonSmallSecondary
                    active={isEnableSubmit}
                    disabled={!isEnableSubmit}
                    type={"button"}
                    onClick={() => {
                        if (onSubmit) onSubmit(inputValue);
                        inputRef.current.value = "";
                        setInputValue("");
                    }}
                >
                    Добавить
                </ButtonSmallSecondary>
            </div>
        </div>
    );
};

export default InputFiltersGroup;
