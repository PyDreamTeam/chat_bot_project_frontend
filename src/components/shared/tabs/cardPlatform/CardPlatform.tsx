import React, { FC } from "react";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import styles from "./styles/CardPlatform.module.css";
import uuid from "uuid-random";
import HeartSVG from "@/src/components/shared/images/HeartSVG";

export interface ICardPlatform {
    id?: number;
    logo: React.ReactNode;
    title: JSX.Element;
    favorite: boolean;
    price?: JSX.Element;
    description: JSX.Element;
    features: string[];
    messengers: string[];
}

const CardPlatform: FC<ICardPlatform> = ({ id, logo, title, favorite, price, description, features, messengers }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                {logo}
                <div className={styles.title}>
                    {title}
                    <div
                        className={favorite ? styles.likeButtonActive : styles.likeButton}
                        //   onClick={() => dispatch(likePlatform(platform.id))}
                    >
                        <HeartSVG></HeartSVG>
                    </div>
                </div>
            </div>
            <div className={styles.mid}>
                {price}
                {description}
                <div className={styles.features}>
                    {features.map((feature) => (
                        <div key={uuid()} className={styles.tag}>
                            <Text type="reg18" color="grey">
                                {feature}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.iconBlock}>
                {messengers.map((logo) => (
                    <div key={uuid()} className={styles.icon}>
                        <Image src={logo} alt="logo-image" width={40} height={40} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPlatform;
