import { FC, ChangeEvent } from "react";
import style from "./inputSearch.module.css";

interface PropsInputSearch {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch: FC<PropsInputSearch> = ({value, onChange}) => <input value={value} onChange={onChange} className={style.inputSearch} placeholder="Найти платформу"/>;