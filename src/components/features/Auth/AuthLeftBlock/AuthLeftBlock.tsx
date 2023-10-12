import React from "react";

import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";

import styles from "./AuthLeftBlock.module.css";
import Link from "next/link";

const AuthLeftBlock = () => {
    return (
        <div className={styles.authLeftBlock}>
            <Link href="/home">
                <Logo variant={LogoVariantProps.header} />
                <div className={styles.blockBlue}>
                    <ElemChooseChatBot variant={ElemVariantProps.auth} text={"конструктор чат-ботов"} />
                </div>
            </Link>
        </div>
    );
};

export default AuthLeftBlock;
