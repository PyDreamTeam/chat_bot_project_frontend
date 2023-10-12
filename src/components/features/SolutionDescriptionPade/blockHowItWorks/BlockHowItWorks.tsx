import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";

import styles from "./BlockHowItWorks.module.css";
import Image from "next/image";

const BlockHowItWorks = () => {
    return (
        <div className={styles.wrapper} id={"video"}>
            <Image src={"/img/Video.png"} alt={"video"} width={520} height={298} />
            <div className={styles.blockText}>
                <Title type={"h3"} color={"dark"}>
                    Как это работает?
                </Title>
                <div className={styles.time}>
                    <Image src={"/icon/Time Circle.svg"} alt={"Time"} width={20} height={20} />
                    <Text type={"reg14"} color={"telegray"}>
                        Продолжительность 2:30 минуты
                    </Text>
                </div>
                <Text type={"reg18"} color={"grey"}>
                    Короткий ролик, чтобы ознакомиться как работает решение на платформе Salebot
                </Text>
            </div>
        </div>
    );
};

export default BlockHowItWorks;
