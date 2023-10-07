import { FC, PropsWithChildren } from "react";
import css from "./styles/button.module.css";

type TypeButton = "submit" | "button" | "reset";

interface PropsButtonCancel {
    type: TypeButton;
    disabled?: boolean;
    active?: boolean;
    width?: number | `${number}px` | undefined;
    onClick?: () => void;
}

export const ButtonCancel: FC<PropsWithChildren<PropsButtonCancel>> = ({
    disabled,
    children,
    active,
    type,
    width,
    onClick,
}) => (
    <button
        disabled={disabled}
        className={active ? `${css.buttonCancelActive}` : `${css.buttonCancelDisabled}`}
        type={type}
        onClick={onClick}
        style={width ? { width: `${width}px` } : undefined}
    >
        {children}
    </button>
);
