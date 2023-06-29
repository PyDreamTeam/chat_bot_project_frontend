import Logo, { LogoVariantProps } from "../../../../../shared/Logo/Logo";
import Link from "next/link";
import { TelegramLogo, VkLogo, WhatsAppLogo } from "@/src/components/features/HomePage/Footer/img/SvgConfig";

import styles from "./FooterLeftBlock.module.css";
import Text from "@/src/components/shared/text/Text";

const FooterLeftBlock = () => {
     return (
          <div className={styles.footerLeftContainer}>
               <Logo variant={LogoVariantProps.footer} />
               <Link href={"/"}>
                    <Text type={"reg16"} color={"white"} className={styles.footerInfo}>
                         info@townsend.pro
                    </Text>
               </Link>
               <div className={styles.footerLogoBlock}>
                    <Link href={"/"}>{WhatsAppLogo}</Link>
                    <Link href={"/"}>{VkLogo}</Link>
                    <Link href={"/"}>{TelegramLogo}</Link>
               </div>
               <div className={styles.footerCopyright}>
                    <Text type={"reg24"} color={"white"} className={styles.footerInfo}>
                         ©
                    </Text>
                    <Text type={"reg14"} color={"white"} className={styles.footerInfo}>
                         Все права защищены
                    </Text>
               </div>
          </div>
     );
};

export default FooterLeftBlock;
