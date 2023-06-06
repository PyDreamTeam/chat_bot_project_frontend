import React, { FC, ChangeEvent } from "react";
import style from "./InputSearch.module.css";

interface PropsInputSearch {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: FC<PropsInputSearch> = ({ value, onChange }) => <input value={value} onChange={onChange} className={style.inputSearch} placeholder="Найти платформу" />;

export default InputSearch;