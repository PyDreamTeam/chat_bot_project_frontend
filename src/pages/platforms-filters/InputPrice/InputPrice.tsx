import React, { FC, ChangeEvent } from "react";
import style from "./inputPrice.module.css";

interface PropsInputPrice {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    variant: number
}

const InputPrice: FC<PropsInputPrice> = ({ value, onChange, variant }) => <input placeholder={variant === 1 ? "от" : "до"} value={value} onChange={onChange} className={style.inputPrice} />;

export default InputPrice;