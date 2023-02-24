import Logo, { LogoVariantProps } from "../../../../shared/Logo/Logo";
import Link from "next/link";
import { TelegramLogo, VkLogo, WhatsAppLogo } from "@/src/components/HomepageWrapper/Footer/pictures/SvgConfig";

import styles from "./FooterLeftBlock.module.css";

const FooterLeftBlock = () => {
     return (
          <div className={styles.footerLeftContainer}>
               <Logo variant={LogoVariantProps.secondary} />
               <Link href={"/"}>
                    <p className={styles.footerInfo}>info@townsend.pro</p>
               </Link>
               <div className={styles.footerLogoBlock}>
                    <Link href={"/"}>{WhatsAppLogo}</Link>
                    <Link href={"/"}>{VkLogo}</Link>
                    <Link href={"/"}>{TelegramLogo}</Link>
               </div>
          </div>
     );
};

export default FooterLeftBlock;
