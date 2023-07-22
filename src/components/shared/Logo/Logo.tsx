import React, { FC } from "react";
import styles from "./styles/Logo.module.css";
import Link from "next/link";

export enum LogoVariantProps {
     header = "header",
     footer = "footer",
}

type ILogo = {
     variant: LogoVariantProps.header | LogoVariantProps.footer;
};

const Logo: FC<ILogo> = ({ variant }) => {
     return (
          <div className={`${styles.logo} ${variant === LogoVariantProps.header ? styles.logoHeader : styles.logoFooter} `}>
               <Link href="/home" className={styles.linkStyle}>TOWNSEND</Link>
          </div>
     );
};

export default Logo;