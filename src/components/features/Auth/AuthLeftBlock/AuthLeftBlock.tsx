import React from "react";

import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";

import styles from "./AuthLeftBlock.module.css";

const AuthLeftBlock = () => {
     return (
          <div className={styles.authLeftBlock}>
               <a href="/home">
                    <Logo variant={LogoVariantProps.header} />
                    <div className={styles.blockBlue}>
                         <ElemChooseChatBot variant={ElemVariantProps.auth}/>
                    </div>
               </a>
          </div>
     );
};

export default AuthLeftBlock;