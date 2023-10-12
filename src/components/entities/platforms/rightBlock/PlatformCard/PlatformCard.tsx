import { FC, MouseEvent, useState } from "react";
import css from "./platformCard.module.css";
import { PropsPlatformCard } from "../../types";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

export const PlatformCard: FC<PropsPlatformCard> = ({
    id,
    title,
    short_description,
    image,
    tags = [],
    type,
    price,
    link,
}) => {
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
        <div className={type === "filter" ? `${css.platforms}` : `${css.onePlatform}`}>
            <div>
                <div className={css.title}>
                    {type === "filter" && <h4 className={css.platform}>{title}</h4>}
                    {type === "platform" && (
                        <a href={link}>
                            <h4 className={css.platformOne}>{title}</h4>
                        </a>
                    )}
                    <Image
                        src={`/platforms/${imageHeart}.svg`}
                        alt="heart"
                        width={24}
                        height={24}
                        onClick={handleClickHeart}
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseEnter}
                        className={css.heart}
                    />
                </div>
                {type === "platform" && (
                    <div className={css.price}>
                        <Title type="h3" color="dark">
                            {price} ₽
                        </Title>
                    </div>
                )}
                <div className={css.infoCard}>
                    <Text type="reg18" color="grey">
                        {short_description}
                    </Text>
                </div>

                <ul className={css.listTags}>
                    {tags
                        .filter((item) => item.is_message === false)
                        .map((item) => (
                            <li key={item.id} className={css.tag}>
                                <Text type="reg18" color="grey">
                                    {item.tag}
                                </Text>
                            </li>
                        ))}
                </ul>
                <ul className={css.listMessages}>
                    {tags
                        .filter((item) => item.is_message === true)
                        .map((item) => (
                            <li key={item.id}>
                                <Image src={`/platforms/${item.image_tag}.svg`} width={40} height={40} alt="message" />
                            </li>
                        ))}
                </ul>
            </div>

            <div className={css.logo}>
                <Image src={image ? `${image}` : ""} width={250} height={250} alt="logo" className={css.img} />
            </div>
        </div>
    );
};
