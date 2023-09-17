import { ChangeEvent, FC } from "react";
import css from "./style.module.css";

interface PropsInputAddPlatform {
    className?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

export const InputAddPlatform: FC<PropsInputAddPlatform> = ({onChange, className, placeholder}) => 
    <input className={`${css.inputAddPlatform} ${className}`} onChange={onChange} placeholder={placeholder}/>;