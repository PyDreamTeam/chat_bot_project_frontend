import React from "react";
import ListWithCheck from "@/src/components/entities/lists/listWithCheck/ListWithCheck";
import { CONFIG } from "@/src/components/entities/TemplatesPageComponents/functionalBlock/Config";
import Image from "next/image";
import imageDev from "./img/Group.svg";

import styles from "./styles/FunctionalBlock.module.css";
import Title from "@/src/components/shared/text/Title";

const FunctionalBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftBlock}>
                <Image src={imageDev} alt="Developers" />
            </div>
            <div className={styles.rightBlock}>
                <Title type={"h3"} color={"black"}>
                    Функционал для настроек чат-ботов
                </Title>
                <ListWithCheck titleConfig={CONFIG} />
            </div>
        </div>
    );
};

export default FunctionalBlock;
