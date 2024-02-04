import React, { FC } from "react";
import styles from "./CardSales.module.css";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import TabAdvantages from "@/src/components/shared/tabs/tabAdvantages/TabAdvantages";
import Image from "next/image";
import { PropsSolutionCard } from "../../platforms/types";

const CardSales: FC<PropsSolutionCard> = ({ price, dignities = [] }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blueBlock}>
                <div className={styles.price}>
                    <Text type={"reg18"} color={"telegray"}>
                        от
                    </Text>
                    <Title type={"h3"} color={"dark"}>
                        {price}
                    </Title>
                    <Text type={"reg18"} color={"telegray"}>
                        <Image src={"/img/ruble.svg"} alt="ruble" width={20} height={21} className={styles.ruble} />
                    </Text>
                </div>

                <div className={styles.advantages}>
                    {dignities.map((item, id) => (
                        <TabAdvantages key={id} text={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSales;
