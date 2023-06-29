import {FC, PropsWithChildren} from "react";
import css from "./styles/button.module.css";

type StyleButton = "button";
type TypeButton = "submit" | "button" | "reset";

interface PropsButton {
    style: StyleButton
    type: TypeButton
    disabled?: boolean
}

export const Button: FC<PropsWithChildren<PropsButton>> = ({disabled, children, style, type}) => 
     <button disabled={disabled} className={css[style]} type={type}>{children}</button>;