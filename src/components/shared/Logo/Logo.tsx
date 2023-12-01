import React, { FC } from "react";
import styles from "./styles/Logo.module.css";

export enum LogoVariantProps {
    header = "logoHeader",
    footer = "logoFooter",
    admin = "logoAdmin",
    adminPage = "logoAdminPage"
}

type ILogo = {
    variant: LogoVariantProps.header | LogoVariantProps.footer | LogoVariantProps.admin | LogoVariantProps.adminPage;
    className?: string
};

const Logo: FC<ILogo> = ({ variant, className }) => {
    return (
        <div
            className={`${styles.logo} 
            ${styles[variant]}
            ${className} 
            `}
        >
            <div className={styles.linkStyle}>TOWNSEND</div>
        </div>
    );
};

export default Logo;
