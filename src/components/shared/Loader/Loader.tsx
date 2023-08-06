import { FC } from "react";
import css from "./loader.module.css";

interface PropsLoader {
    isLoading: boolean
}

export const Loader: FC<PropsLoader> = ({isLoading}) => 
    isLoading ? (<div className={css.customLoader}></div>) : null;