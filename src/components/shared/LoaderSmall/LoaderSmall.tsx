import { FC } from "react";
import css from "./LoaderSmall.module.css";

interface PropsLoader {
    isLoading: boolean;
}

export const LoaderSmall: FC<PropsLoader> = ({ isLoading }) =>
    isLoading ? <div className={css.customLoader}></div> : null;
