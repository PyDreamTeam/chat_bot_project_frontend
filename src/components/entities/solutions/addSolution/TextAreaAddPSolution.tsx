import { ChangeEvent, FC } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";

interface PropsTextAreaAddSolution {
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    label?: string;
}

export const TextAreaAddSolution: FC<PropsTextAreaAddSolution> = ({
    onChange,
    className,
    placeholder,
    label,
    value,
}) => {
    return (
        <div className={className}>
            <Text type="reg18" color="dark" className={css.text}>
                {label}
            </Text>
            <textarea
                // required={false}
                className={`${css.textareaAddSolution}`}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};
