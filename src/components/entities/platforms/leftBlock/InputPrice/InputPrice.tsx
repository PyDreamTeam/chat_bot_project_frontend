import css from "./inputPrice.module.css";
import { FC, ChangeEvent } from "react";

interface PropsInputPriceMin {
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const InputPrice: FC<PropsInputPriceMin> = ({ value, onChange, placeholder }) => (
    <input value={value} onChange={onChange} className={css.input} placeholder={placeholder} />
);
