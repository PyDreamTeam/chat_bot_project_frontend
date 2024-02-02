import style from "./components.module.css";
import React, { FC, useState } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Logo, { LogoVariantProps } from "@/src/components/shared/Logo/Logo";
import ElemChooseChatBot, { ElemVariantProps } from "@/src/components/shared/elemChooseChatBot/ElemChooseChatBot";
import { S } from "msw/lib/glossary-de6278a9";

interface IBanner {
    slogan?: string;
}
const Banner: FC<IBanner> = ({ slogan = "В командной работе хорошо то, что у вас всегда есть единомышленники" }) => {
    return (
        <div className={style.banner}>
            <Image src="/admin/banner_bg.png" alt="banner" width={930} height={274} className={style.slogan_bg} />
            <div className={style.container}>
                <div className={style.blockLogo}>
                    <Logo variant={LogoVariantProps.adminPage} />
                    <ElemChooseChatBot variant={ElemVariantProps.auth} text="конструктор чат-ботов" />
                </div>
                <div className={style.slogan}>
                    <Text type="reg20" color="black">
                        {slogan}
                    </Text>
                </div>
            </div>
        </div>
    );
};
export default Banner;
