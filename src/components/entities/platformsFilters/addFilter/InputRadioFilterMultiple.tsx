import { ChangeEvent, FC, useState } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";

interface PropsTextAreaAddFilter {
    className?: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

export const InputRadioFilterMultiple: FC<PropsTextAreaAddFilter> = ({ onChange, className, label, value }) => {
    const [multiple, setMultiple] = useState("multiple");

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
                    defaultChecked={true}
                />
                <Text type="reg18" color="dark" className={multiple === "single" ? css.textGrey : css.text}>
                    Множественный
                </Text>
            </div>
        </div>
    );
};
