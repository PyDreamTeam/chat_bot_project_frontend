import React, { FC } from "react";
import styles from "./styles/ListCardsPlatforms.module.css";
import CardPlatform, { ICardPlatform } from "@/src/components/shared/tabs/cardPlatform/CardPlatform";
import { useRouter } from "next/router";
import { PropsPlatformsList } from "../../platforms/types";

const ListAllPlatforms: FC<PropsPlatformsList> = ({ results = [] }) => {
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/platforms/platform/${idp}`);
    };

    return (
        <div className={styles.platforms}>
            {results.map((item) => (
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

export default ListAllPlatforms;

// export interface IListCardsPlatforms {
//     results: ICardPlatform[];
//     type?: "sliderCard" | "platforms";
// }
// className={type === "sliderCard" ? `${styles.cards}` : `${styles.platforms}`}
