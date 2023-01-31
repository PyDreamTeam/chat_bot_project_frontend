import React, {FC, MouseEventHandler} from 'react';

import styles from "./Button.module.css";

export enum BtnVariants {
    primary = "primary",
    secondary = "secondary",
}

export enum ButtonTypeProps {
    button = "button",
    submit = "submit",
    reset = "reset"
}

export interface ButtonProps {
    variant?: BtnVariants
    type?: ButtonTypeProps
    onClick?: MouseEventHandler
    disabled?: boolean
    className?: string
}

const Button: FC<ButtonProps> = (
    {
        variant,
        type = ButtonTypeProps.button,
        onClick = () => {},
        disabled = false,
        className = '',
    }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${ variant === BtnVariants.primary ? styles.primary : styles.default
            }
                ${className}
            `}
        >
            Button
        </button>
    );
};

export default Button;