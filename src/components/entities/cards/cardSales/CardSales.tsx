import React, { FC } from "react";
import styles from "./CardSales.module.css";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import TabAdvantages from "@/src/components/shared/tabs/tabAdvantages/TabAdvantages";
import Image from "next/image";
import ButtonFavorites from "@/src/components/shared/buttons/ButtonFavorites";
import { PropsSolutionCard } from "../../platforms/types";
import ToolTip from "@/src/components/shared/toolTip/ToolTip";

const CardSales: FC<PropsSolutionCard> = ({ price, results = [] }) => {
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
                    {results.map((item, id) => (
                        <TabAdvantages key={id} text={item.dignities} />
                    ))}
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <ToolTip type={true} text={"Зарегистрируйтесь,чтобы добавить в избранное"}>
                    <ButtonFavorites text={""} />
                </ToolTip>
            </div>
        </div>
    );
};

export default CardSales;
