import { FC, MouseEvent, useState } from "react";
import styles from "../FavoriteSolution/FavoriteSolution.module.css";
import { PropsFavoriteSolutionCard } from "../platforms/types";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import Title from "../../shared/text/Title";
import { useAddSolutionToFavoriteMutation } from "@/src/store/services/solutions";
import Cookies from "js-cookie";

export const FavoriteSolution: FC<PropsFavoriteSolutionCard> = ({
    id,
    title,
    short_description,
    image,
    price,
    tags = [],
    forceUpdate
}) => {

    const [imageHeart, setImageHeart] = useState("like");
    const [addToFavorite] = useAddSolutionToFavoriteMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const handleClickHeart = (e: MouseEvent) => {
        addToFavorite({id, token}).then(forceUpdate);
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
            setImageHeart("like");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div className={styles.title}>
                    <h4 className={styles.text}>{title}</h4>
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
                <div >
                    <p className={styles.price}> {price} ₽</p>
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
                                    {item.tag}
                                </Text>
                            </li>
                        ))}
                </ul>
                <ul className={styles.containerMesssengare}>
                    {tags
                        .filter((item) => item.is_message === true)
                        .map((item) => (
                            <li key={item.id}>
                                <Image src={`/platforms/${item.image_tag}.svg`} width={40} height={40} alt="message" />
                            </li>
                        ))}
                </ul>
            </div>
            <div className={styles.logo}>
                <Image src={image ? `${image}` : ""} width={250} height={250} alt="logo" className={styles.img} />
            </div>
        </div>
    );
};