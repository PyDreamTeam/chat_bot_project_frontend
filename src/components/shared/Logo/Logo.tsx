import React, { FC } from "react";
import styles from "./styles/Logo.module.css";

export enum LogoVariantProps {
    header = "header",
    footer = "footer",
    admin = "admin"
}

type ILogo = {
    variant: LogoVariantProps.header | LogoVariantProps.footer | LogoVariantProps.admin;
    className?: string
};

const Logo: FC<ILogo> = ({ variant, className }) => {
    return (
        <div
            className={`${styles.logo} 
            ${variant === LogoVariantProps.header && styles.logoHeader} 
            ${variant === LogoVariantProps.footer && styles.logoFooter} 
            ${variant === LogoVariantProps.admin && styles.logoAdmin}
            ${className} 
            `}
        >
            <div className={styles.linkStyle}>TOWNSEND</div>
        </div>
    );
};

export default Logo;
