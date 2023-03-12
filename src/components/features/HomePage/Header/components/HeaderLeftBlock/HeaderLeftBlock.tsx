import React from "react";
import styles from "../../Header.module.css";
import Logo from "@/src/components/shared/Logo/Logo";
import { LogoVariantProps } from "@/src/components/shared/Logo/Logo";

const HeaderLeftBlock = () => {
     return (
          <div className={styles.leftBlock}>
               <Logo variant={LogoVariantProps.header} />
          </div>
     );
};

export default HeaderLeftBlock;
