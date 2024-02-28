import { FC, MouseEvent, useEffect, useState } from "react";
import css from "./solutionCard.module.css";
import { PropsSolutionCard } from "../../../solutions/types";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { useAddSolutionToFavoriteMutation } from "@/src/store/services/solutions";
import Cookies from "js-cookie";
import ToolTip from "@/src/components/shared/toolTip/ToolTip";
import { useDataUserQuery } from "@/src/store/services/userAuth";

export const SolutionCard: FC<PropsSolutionCard> = ({
    title,
    short_description,
    image,
    tags = [],
    price,
    forceUpdate,
    id,
    is_favorite,
}) => {
    const [imageHeart, setImageHeart] = useState("dislike");

    const [addToFavorite] = useAddSolutionToFavoriteMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { isSuccess } = useDataUserQuery(token);

    const handleClickHeart = (e: MouseEvent) => {
        if (!isSuccess) {
            e.stopPropagation();
            console.log("sign in!");
        } else {
            addToFavorite({ id, token }).then(forceUpdate);
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

    useEffect(() => {
        if (is_favorite) {
            setImageHeart("like");
        } else {
            setImageHeart("dislike");
        }
    }, []);

    return (
        <div className={css.oneCard}>
            <div>
                <div className={css.title}>
                    <h4 className={css.platformOne}>{title}</h4>
                    <ToolTip text={"Зарегистрируйтесь,чтобы добавить в избранное"}>
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
                    </ToolTip>
                </div>
                <div>
                    <p className={css.price}>{price} ₽</p>
                </div>
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
