import { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

interface PropsInputAddSolution {
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    value?: string | number;
    style?: string;
    disabled?: boolean;
    link?: boolean;
    countPlatforms?: boolean;
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
    results?: {
        id?: number;
        title?: string;
        text?: string;
        img?: any;
    }[];
    is?: boolean;
}

export const InputAddSolution: FC<PropsInputAddSolution> = ({
    onChange,
    className,
    placeholder,
    label,
    value,
    style,
    disabled,
    link,
    countPlatforms,
    onKeyPress,
    results = [],
    is,
}) => {
    const [selected, setSelected] = useState<string>("");

    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={className}>
            <Text type="reg18" color="dark">
                {label}
            </Text>
            {is ? (
                <>
                    <div className={css.inputWrapper}>
                        <input
                            className={`${css.inputDropDown} ${style}`}
                            onChange={onChange}
                            placeholder={placeholder}
                            value={value}
                            disabled={disabled}
                            onKeyPress={onKeyPress}
                        />
                        <div className={css.dropdown_btn} onClick={handleIsOpen}>
                            {isOpen ? (
                                <Image src={"/img/chevron-up.svg"} alt="chevron" width={24} height={24} />
                            ) : (
                                <Image src={"/img/chevron-down.svg"} alt="chevron" width={24} height={24} />
                            )}
                        </div>
                    </div>
                    <>
                        {isOpen && (
                            <ul className={css.dropdown_content}>
                                {results.map((item: any) => (
                                    <li
                                        key={item.id}
                                        className={css.dropdown_item}
                                        onClick={(e: any) => {
                                            setSelected(item.title);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <Text type="reg14" color="dark">
                                            {item.title}
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                </>
            ) : (
                <>
                    {!link ? (
                        <input
                            className={`${css.inputAddSolution} ${style}`}
                            onChange={onChange}
                            placeholder={placeholder}
                            value={value}
                            disabled={disabled}
                            onKeyPress={onKeyPress}
                        />
                    ) : (
                        <div className={css.blockInput}>
                            <input className={css.input1} value={"https://"} disabled={true} />
                            <input className={css.input2} onChange={onChange} placeholder={placeholder} value={value} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
