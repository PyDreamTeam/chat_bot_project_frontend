import React, { FC, useState, MouseEvent } from "react";
import Text from "@/src/components/shared/text/Text";
import Title from "../../text/Title";
import Image from "next/image";
import styles from "./styles/CardPlatform.module.css";
import { PropsPlatformCard } from "@/src/components/entities/platforms/types";

const CardPlatform: FC<PropsPlatformCard> = ({ id, title, price, short_description, image, tags = [] }) => {
    const [imageHeart, setImageHeart] = useState("dislike");

    const handleClickHeart = (e: MouseEvent) => {
        e.stopPropagation();
        if (imageHeart === "like") {
            setImageHeart("dislike");
        }
        if (imageHeart === "dislike") {
            setImageHeart("like");
        }
        if (imageHeart === "hoverHeart") {
            setImageHeart("like");
        }
    };
    const handleMouseEnter = () => {
        if (imageHeart === "dislike") setImageHeart("hoverHeart");
    };
    const handleMouseLeave = () => {
        if (imageHeart === "hoverHeart") {
            setImageHeart("dislike");
        }
    };
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Image src={image ? `${image}` : ""} width={100} height={100} alt="logo" className={styles.img} />
                </div>
                <div className={styles.title}>
                    <Title type="h4" color="dark">
                        {title}
                    </Title>
                    <div>
                        <Image
                            src={`/platforms/${imageHeart}.svg`}
                            alt="heart"
                            width={24}
                            height={24}
                            onClick={handleClickHeart}
                            onMouseLeave={handleMouseLeave}
                            onMouseEnter={handleMouseEnter}
                            className={styles.heart}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.mid}>
                {price}
                {short_description}
                <div className={styles.features}>
                    {tags
                        .filter((item) => item.is_message === false)
                        .map((item) => (
                            <div key={item.id} className={styles.tag}>
                                <Text type="reg18" color="grey">
                                    {item.tag}
                                </Text>
                            </div>
                        ))}
                </div>
            </div>
            <div className={styles.iconBlock}>
                {tags
                    .filter((item) => item.is_message === true)
                    .map((item) => (
                        <div key={item.id}>
                            <Image src={`/platforms/${item.image_tag}.svg`} width={40} height={40} alt="message" />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CardPlatform;
