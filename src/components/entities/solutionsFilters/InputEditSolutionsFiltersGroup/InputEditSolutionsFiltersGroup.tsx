import React, { FC, KeyboardEvent, ChangeEvent, FocusEvent, useState, MutableRefObject } from "react";
import { useRef } from "react";
import styles from "./InputEditSolutionsFiltersGroup.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { ButtonSmallSecondary } from "@/src/components/shared/buttons/ButtonSmallSecondary";
import { useEditSolutionFilterGroupMutation, useGetSolutionFilterGroupsQuery } from "@/src/store/services/solutions";
import Cookies from "js-cookie";

interface PropsInputGroup {
    id: number | undefined;
    placeholder?: string;
    value?: string | undefined;
    isShown?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSubmit?: () => void;
    onCancel?: () => void;
}

const InputEditSolutionsFiltersGroup: FC<PropsInputGroup> = ({
    id,
    placeholder,
    value,
    isShown,
    onBlur,
    onSubmit,
    onCancel,
}) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    const [editGroup, { isSuccess: editIsSuccess, error: editError, isLoading: editIsLoading }] =
        useEditSolutionFilterGroupMutation();

    const [isShownErrorShort, setIsShownErrorShort] = useState(false);
    const [isShownErrorExist, setIsShownErrorExist] = useState(false);

    const [isEnableSubmit, setIsEnableSubmit] = useState(false);

    const { data: dataGroups, refetch: refetchGroups } = useGetSolutionFilterGroupsQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );

    const checkGroupName = (name: string) => {
        const groupsTitles: string[] = dataGroups?.results.map((item: any) => item.title);
        if (groupsTitles.find((value) => value === name.trim()) === undefined) {
            return true;
        } else return false;
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter" || e.key == "NumpadEnter") {
            const title = (e.target as HTMLInputElement).value;
            if (!(title.trim().length <= 1) || !checkGroupName(title)) {
                setIsEnableSubmit(false);
                editGroup({ id, token, title: inputValue })
                    .then(refetchGroups)
                    .then(() => {
                        if (onSubmit) onSubmit();
                    });
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
                    defaultValue={value}
                    onChange={(e) => {
                        if (isValidGroupName(e.target.value)) {
                            setInputValue(e.target.value);
                            setIsEnableSubmit(true);
                        } else {
                            setIsEnableSubmit(false);
                        }
                    }}
                    onBlur={onBlur}
                    className={`${!isShown ? styles.inputGroupHide : styles.inputGroupEdit}`}
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
                        if (value) inputRef.current.value = value;
                        setIsShownErrorShort(false);
                        setIsShownErrorExist(false);
                        setIsEnableSubmit(false);
                        if (onCancel) onCancel();
                    }}
                >
                    Отмена
                </ButtonSmallSecondary>
                <ButtonSmallSecondary
                    active={isEnableSubmit}
                    disabled={!isEnableSubmit}
                    type={"button"}
                    onClick={() => {
                        setIsEnableSubmit(false);
                        editGroup({ id, token, title: inputValue })
                            .then(refetchGroups)
                            .then(() => {
                                if (onSubmit) onSubmit();
                            });
                    }}
                >
                    Сохранить
                </ButtonSmallSecondary>
            </div>
        </div>
    );
};

export default InputEditSolutionsFiltersGroup;
