import React, { FC, ChangeEvent } from "react";
import style from "./inputSearch.module.css";

interface PropsInputSearch {
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: FC<PropsInputSearch> = ({ placeholder, value, onChange }) => (
    <input value={value} onChange={onChange} className={style.inputSearch} placeholder={placeholder} />
);

export default InputSearch;
