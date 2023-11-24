import { FC, PropsWithChildren } from "react";
import css from "./styles/button.module.css";

type TypeButtonSmall = "submit" | "button" | "reset";

interface PropsButtonSmallSecondary {
    type: TypeButtonSmall;
    disabled?: boolean;
    active?: boolean;
    negative?: boolean;
    width?: number | `${number}px` | undefined;
    onClick?: () => void;
}

export const ButtonSmallSecondary: FC<PropsWithChildren<PropsButtonSmallSecondary>> = ({
    disabled,
    children,
    active,
    negative,
    type,
    width,
    onClick,
}) => (
    <button
        disabled={disabled}
        // className={active ? `${css.buttonSmallSecondaryActive}` : `${css.buttonSmallSecondaryDisabled}`}
        className={
            active
                ? negative
                    ? `${css.buttonSmallSecondaryActive} ${css.buttonSmallSecondaryNegativeActive}`
                    : `${css.buttonSmallSecondaryActive}`
                : `${css.buttonSmallSecondaryDisabled}`
        }
        type={type}
        onClick={onClick}
        style={width ? { width: `${width}px` } : undefined}
    >
        {children}
    </button>
);
