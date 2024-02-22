import { FC, MouseEvent, useState } from "react";
import styles from "./HistoryPlatform.module.css";
import { PropsFavoritePlatformCard, PropsPlatformCard } from "../platforms/types";
import Link from "next/link";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import Image from "next/image";
import { useAddPlatformToFavoriteMutation } from "@/src/store/services/platforms";
import Cookies from "js-cookie";

export const HistoryPlatform: FC<PropsPlatformCard> = ({
    id,
    title,
    short_description,
    image,
    tags = [],
    forceUpdate,
}) => {
    // const [imageHeart, setImageHeart] = useState("like");
    const [addToFavorite] = useAddPlatformToFavoriteMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    // const handleClickHeart = (e: MouseEvent) => {
    //     e.stopPropagation();
    //     if (imageHeart === "like") {
    //         setImageHeart("dislike");
    //     }
    //     addToFavorite({ id, token }).then(forceUpdate);
    // };
    // const handleMouseEnter = () => {
    //     if (imageHeart === "dislike") setImageHeart("hoverHeart");
    // };
    // const handleMouseLeave = () => {
    //     if (imageHeart === "hoverHeart") {
    //         setImageHeart("like");
    //     }
    // };

    return (
        <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div className={styles.title}>
                    <Link href={`/platforms/platform/${id}`}>
                        <Title type="h4" color="black" className={styles.titleLink}>
                            {title}
                        </Title>
                    </Link>
                    {/* <Image
                        src={`/platforms/${imageHeart}.svg`}
                        alt="heart"
                        width={24}
                        height={24}
                        onClick={handleClickHeart}
                        // onMouseLeave={handleMouseLeave}
                        // onMouseEnter={handleMouseEnter}
                        className={styles.heart}
                    /> */}
                </div>
                <div className={styles.infoCard}>
                    <Text type="reg18" color="grey">
                        {short_description}
                    </Text>
                </div>
                <ul className={styles.containerTags}>
                    {tags
                        .filter((item) => item.is_message === false)
                        .map((item) => (
                            <li key={item.id} className={styles.tag}>
                                <Text type="reg18" color="grey">
                                    {item.properties}
                                </Text>
                            </li>
                        ))}
                </ul>
                <ul className={styles.containerMesssengare}>
                    {tags
                        .filter((item) => item.is_message === true)
                        .map((item) => (
                            <li key={item.id}>
                                <Image src={`/platforms/${item.image}.svg`} width={40} height={40} alt="message" />
                            </li>
                        ))}
                </ul>
            </div>
            <div className={styles.logo}>
                <Image src={image ? `${image}` : "any"} width={186} height={186} alt="logo" className={styles.img} />
            </div>
        </div>
    );
};
