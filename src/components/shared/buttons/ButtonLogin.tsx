import { FC, PropsWithChildren } from "react";
import css from "./styles/button.module.css";

type TypeButtonLogin = "submit" | "button" | "reset";

interface PropsButtonLogin {
    type: TypeButtonLogin;
    disabled?: boolean;
    active: boolean;
    onClick?: () => void;
}

export const ButtonLogin: FC<PropsWithChildren<PropsButtonLogin>> = ({ type, children, disabled, active, onClick }) => (
    <button onClick={onClick} disabled={disabled} className={active ? `${css.active}` : `${css.disabled}`} type={type}>
        {children}
    </button>
);
