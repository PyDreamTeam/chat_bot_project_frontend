import React, { FC } from "react";
import { Advantages } from "@/src/types";
import styles from "./TabAdvantages.module.css";
import Image from "next/image";
import Text from "../../text/Text";

const TabAdvantages: FC<Advantages> = ({ text }) => {
    return (
        <div className={styles.wrapper}>
            <Image src={"/img/Пункты.svg"} alt={"Пункты"} width={24} height={24} />
            <Text type={"reg16"} color={"grey"}>
                {text}
            </Text>
        </div>
    );
};

export default TabAdvantages;
