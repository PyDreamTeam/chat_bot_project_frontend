import { ChangeEvent, FC } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";

interface PropsTextAreaAddFilter {
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    label?: string;
}

export const TextAreaAddFilter: FC<PropsTextAreaAddFilter> = ({ onChange, className, placeholder, label, value }) => {
    return (
        <div className={className}>
            <Text type="reg18" color="dark" className={css.text}>
                {label}
            </Text>
            <textarea
                className={`${css.textareaAddPlatform}`}
                onChange={onChange}
                placeholder={placeholder}
                defaultValue={value}
            />
        </div>
    );
};
