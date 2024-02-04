import React, { FC } from "react";
import styles from "./BlockHowItWorks.module.css";
import Link from "next/link";
import ArrowOut from "@/src/components/shared/images/ArrowOut";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

interface PropsBlockHowItWorks {
    link?: string;
}

const BlockHowItWorks: FC<PropsBlockHowItWorks> = ({ link }) => {
    return (
        <div className={styles.wrapper} id={"video"}>
            <Title type={"h3"} color={"dark"}>
                Как это работает?
            </Title>
            <Link href={`${link}`} className={styles.blockVideo}>
                <Image src={"/img/video-solution.png"} alt={"video"} width={1264} height={503} />
                <div className={styles.videoComment}>
                    <Text type={"reg18"} color={"white"}>
                        Подробнее
                    </Text>
                    <ArrowOut />
                </div>
            </Link>
        </div>
    );
};

export default BlockHowItWorks;
