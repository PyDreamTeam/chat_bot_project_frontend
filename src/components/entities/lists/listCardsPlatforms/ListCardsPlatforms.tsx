import React, { FC } from "react";
import styles from "./styles/ListCardsPlatforms.module.css";
import CardPlatform from "@/src/components/shared/tabs/cardPlatform/CardPlatform";
import { useRouter } from "next/router";
import { PropsPlatformCard } from "../../platforms/types";

export interface IListCardsPlatforms {
    results: PropsPlatformCard[];
}

const ListCardsPlatforms: FC<IListCardsPlatforms> = ({ results }) => {
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/platforms/platform/${idp}`);
    };

    return (
        <div className={styles.cards}>
            {results?.map((item) => (
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
                        is_favorite={item.is_favorite}
                    />
                </div>
            ))}
        </div>
    );
};

export default ListCardsPlatforms;
