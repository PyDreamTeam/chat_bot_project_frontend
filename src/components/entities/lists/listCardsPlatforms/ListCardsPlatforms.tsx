import React, { FC } from "react";
import styles from "./styles/ListCardsPlatforms.module.css";
import CardPlatform, { ICardPlatform } from "@/src/components/shared/tabs/cardPlatform/CardPlatform";
import { useRouter } from "next/router";
import { PropsPlatformsList } from "../../platforms/types";

export interface IListCardsPlatforms {
    results: ICardPlatform[];
    // type?: "sliderCard" | "platforms";
}

const ListCardsPlatforms: FC<IListCardsPlatforms> = ({ results = [] }) => {
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/platforms/platform/${idp}`);
    };
    // className={type === "sliderCard" ? `${styles.cards}` : `${styles.platforms}`}
    return (
        <div className={styles.cards}>
            {results.map((item: ICardPlatform) => (
                <div
                    className={styles.link}
                    key={item.id}
                    onClick={() => {
                        if (item.id) {
                            handleClick(item.id);
                        }
                    }}
                >
                    <CardPlatform
                        id={item.id}
                        title={item.title}
                        short_description={item.short_description}
                        image={item.image}
                        tags={item.tags}
                    />
                </div>
            ))}
        </div>
    );
};

export default ListCardsPlatforms;
