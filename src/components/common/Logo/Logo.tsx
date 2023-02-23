import React, { FC } from "react";
import styles from "./Logo.module.css";

export enum LogoVariantProps {
     primary = "primary",
     secondary = "secondary",
}

interface ILogo {
     variant: LogoVariantProps;
}

const Logo: FC<ILogo> = ({ variant }) => {
     return (
          <div className={`${styles.logo} ${variant === LogoVariantProps.primary ? styles.logoHeader : styles.logoFooter} `}>TOWNSEND</div>
     );
};

export default Logo;
