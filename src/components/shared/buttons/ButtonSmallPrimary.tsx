import { FC, PropsWithChildren } from "react";
import css from "./styles/button.module.css";

type TypeButtonSmall = "submit" | "button" | "reset";

interface PropsButtonSmallPrimary {
    type: TypeButtonSmall;
    disabled?: boolean;
    active?: boolean;
    width?: number | `${number}px` | undefined;
    onClick?: () => void;
}

export const ButtonSmallPrimary: FC<PropsWithChildren<PropsButtonSmallPrimary>> = ({
    disabled,
    children,
    active,
    type,
    width,
    onClick,
}) => (
    <button
        disabled={disabled}
        className={active ? `${css.buttonSmallPrimaryActive}` : `${css.buttonSmallPrimaryDisabled}`}
        type={type}
        onClick={onClick}
        style={width ? { width: `${width}px` } : undefined}
    >
        {children}
    </button>
);
