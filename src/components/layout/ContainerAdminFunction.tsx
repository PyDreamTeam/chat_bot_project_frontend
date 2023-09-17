import { FC, PropsWithChildren } from "react";
import css from "./style.module.css";

export const ContainerAdminFunction: FC<PropsWithChildren> = ({children}) => {
    return(
        <div className={css.containerAdminFunction}>
            {children}
        </div>
    );
};