import { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

interface PropsInputAddFilter {
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    value?: string | number;
    style?: string;
    disabled?: boolean;
    link?: boolean;
    countSolutions?: boolean;
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const InputAddFilter: FC<PropsInputAddFilter> = ({
    onChange,
    className,
    placeholder,
    label,
    value,
    style,
    disabled,
    link,
    countSolutions,
    onKeyPress,
}) => {
    const [isActiveInfo, setIsActiveInfo] = useState<boolean>(false);
    const handleClick = () => {
        setIsActiveInfo(!isActiveInfo);
    };

    return (
        <div className={className}>
            <Text type="reg18" color="dark">
                {label}
            </Text>
            <input
                className={`${css.inputAddPlatform} ${style}`}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onKeyPress={onKeyPress}
            />
        </div>
    );
};
export default InputAddFilter;
