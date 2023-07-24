import React from "react";
import styles from "../../Header.module.css";
import Logo from "@/src/components/shared/Logo/Logo";
import { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import Link from "next/link";

const HeaderLeftBlock = () => {
     return (
          <Link href="/home">
               <div className={styles.leftBlock}>
                    <Logo variant={LogoVariantProps.header} />
               </div>
          </Link>
          
     );
};

export default HeaderLeftBlock;
