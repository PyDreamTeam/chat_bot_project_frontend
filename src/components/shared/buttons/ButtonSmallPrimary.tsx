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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
                d="M15.0013 10.8307H10.8346V14.9974C10.8346 15.2184 10.7468 15.4304 10.5906 15.5866C10.4343 15.7429 10.2223 15.8307 10.0013 15.8307C9.78029 15.8307 9.56833 15.7429 9.41205 15.5866C9.25577 15.4304 9.16797 15.2184 9.16797 14.9974V10.8307H5.0013C4.78029 10.8307 4.56833 10.7429 4.41205 10.5867C4.25577 10.4304 4.16797 10.2184 4.16797 9.9974C4.16797 9.77638 4.25577 9.56442 4.41205 9.40814C4.56833 9.25186 4.78029 9.16406 5.0013 9.16406H9.16797V4.9974C9.16797 4.77638 9.25577 4.56442 9.41205 4.40814C9.56833 4.25186 9.78029 4.16406 10.0013 4.16406C10.2223 4.16406 10.4343 4.25186 10.5906 4.40814C10.7468 4.56442 10.8346 4.77638 10.8346 4.9974V9.16406H15.0013C15.2223 9.16406 15.4343 9.25186 15.5906 9.40814C15.7468 9.56442 15.8346 9.77638 15.8346 9.9974C15.8346 10.2184 15.7468 10.4304 15.5906 10.5867C15.4343 10.7429 15.2223 10.8307 15.0013 10.8307Z"
                fill="white"
            />
        </svg>
        {children}
    </button>
);
