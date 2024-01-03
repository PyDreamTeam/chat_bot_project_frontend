import { ChangeEvent, FC, useState } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";

interface PropsTextAreaAddFilter {
    defaultValue?: string;
    className?: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

export const InputRadioFilterMultiple: FC<PropsTextAreaAddFilter> = ({
    onChange,
    className,
    label,
    value,
    defaultValue,
}) => {
    const [multiple, setMultiple] = useState(defaultValue);

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMultiple(e.target.value);
    };

    return (
        <div className={className}>
            <Text type="reg18" color="dark" className={css.text}>
                {label}
            </Text>
            <div className={css.radioContainer}>
                <input
                    type="radio"
                    name="multiple"
                    className={css.radioInput}
                    onChange={(e) => {
                        changeValue(e);
                        onChange(e);
                    }}
                    value="single"
                    defaultChecked={multiple === "single" ? true : false}
                />
                <Text type="reg18" color="dark" className={multiple === "multiple" ? css.textGrey : css.text}>
                    Одиночный
                </Text>
            </div>
            <div className={css.radioContainer}>
                <input
                    type="radio"
                    name="multiple"
                    className={css.radioInput}
                    onChange={(e) => {
                        changeValue(e);
                        onChange(e);
                    }}
                    value="multiple"
                    defaultChecked={multiple != "single" ? true : false}
                />
                <Text type="reg18" color="dark" className={multiple === "single" ? css.textGrey : css.text}>
                    Множественный
                </Text>
            </div>
        </div>
    );
};
