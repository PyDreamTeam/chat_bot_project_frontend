import { FC, PropsWithChildren } from "react";
import styles from "./styles/buttonEmail.module.css";

type TypeButtonLogin = "submit" | "button" | "reset";

interface PropsButtonEmail {
    type: TypeButtonLogin;
    disabled?: boolean;
    active: boolean;
    onClick?: () => void;
}

export const ButtonEmail: FC<PropsWithChildren<PropsButtonEmail>> = ({ type, children, disabled, active, onClick }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={active ? `${styles.active}` : `${styles.disabled}`}
        type={type}
    >
        {children}
    </button>
);
