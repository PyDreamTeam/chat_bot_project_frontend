import React from "react";
import Title from "@/src/components/shared/text/Title";
import Image from "next/image";

import styles from "./styles/blockVideo.module.css";
import ButtonPlay from "@/src/components/shared/buttons/ButtonPlay";

const BlockVideo = () => {
    return (
        <div className={styles.wrapper}>
            <Title type={"h3"} color={"black"}>
                Как это работает
            </Title>
            <div className={styles.videoBlock}>
                <Image src={"img/imageVideo.png"} alt={"video"} width={1264} height={725} />
                <div className={styles.btn}>
                    <ButtonPlay />
                </div>
            </div>
        </div>
    );
};

export default BlockVideo;
