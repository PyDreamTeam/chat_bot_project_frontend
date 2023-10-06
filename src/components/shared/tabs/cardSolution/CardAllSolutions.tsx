import React, { FC, useState, MouseEvent, Dispatch, SetStateAction } from "react";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import styles from "./styles/CardSolution.module.css";
import { TsConfigJson } from "type-fest";
import JSX = TsConfigJson.CompilerOptions.JSX;

export interface ICardSolution {
    id?: number;
    title?: string;
    business_model?: string;
    business_area?: string;
    business_niche?: string;
    objective?: string;
    solution_type?: string;
    short_description?: string;
    platform?: string;
    messengers?: string;
    integration_with_CRM?: string;
    integration_with_payment_systems?: string;
    tasks?: string;
    actions_to_complete_tasks?: string;
    turnkey_solutions?: number;
    image?: string;
    price?: number;
    is_active?: boolean;
    created_at?: string;
    // type?: "start" | "other";
    tags?: {
        id?: number;
        tag?: string;
        image_tag?: string;
        is_active?: boolean;
        is_message?: boolean;
    }[];

    //   "filter": [
    //     0
    //   ]
}

const CardAllSolutions: FC<ICardSolution> = ({ id, image, title, price, messengers, short_description, tags = [] }) => {
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
        <div className={styles.solution}>
            <div className={styles.topWrap}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <Image
                            src={image ? `${image}` : ""}
                            width={100}
                            height={100}
                            alt="logo"
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.title}>
                        {title}
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

export default CardAllSolutions;
