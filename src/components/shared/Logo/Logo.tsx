import React, { FC } from "react";
import styles from "./styles/Logo.module.css";

export enum LogoVariantProps {
     header = "header",
     footer = "footer",
}

type ILogo = {
     variant: LogoVariantProps.header | LogoVariantProps.footer;
};

const Logo: FC<ILogo> = ({ variant }) => {
     return (
          <div className={`${styles.logo} ${variant === LogoVariantProps.header ? styles.logoHeader : styles.logoFooter} `}>TOWNSEND</div>
     );
};

export default Logo;
