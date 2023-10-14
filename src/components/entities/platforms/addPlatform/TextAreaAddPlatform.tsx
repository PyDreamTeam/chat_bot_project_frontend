import { ChangeEvent, FC } from "react";
import css from "./style.module.css";
import Text from "@/src/components/shared/text/Text";

interface PropsTextAreaAddPlatform {
    className?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    label?: string
}

export const TextAreaAddPlatform: FC<PropsTextAreaAddPlatform> = ({onChange, className, placeholder, label, value}) => {
    return(
        <div className={className}>
            <Text type="reg18" color="dark" className={css.text}>{label}</Text>
            <textarea className={`${css.textareaAddPlatform}`} onChange={onChange} placeholder={placeholder} value={value}/>
        </div>
    );
};
    