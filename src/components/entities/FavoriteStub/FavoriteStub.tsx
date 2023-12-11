import React, { FC } from "react";
import styles from "../FavoriteStub/FavoriteStub.module.css";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { useRouter } from "next/router";
import { plusSvgSecondary } from "@/src/components/entities/platformsFilters/img/SvgConfig";
import { ButtonSmallPrimary } from "@/src/components/shared/buttons/ButtonSmallPrimary";

export interface IFavoriteStub {
    text: string;
    link: string;
}

const FavoriteStub: FC<IFavoriteStub> = ({ text, link }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Image src="/img/Heartbreak.svg" alt="edit" width={120} height={120} className={styles.imgClose}></Image>
            <Text type="med18btn" color="black" className={styles.text}>
                {text}
            </Text>
            <ButtonSmallPrimary active={true} type={"button"} onClick={() => router.push(link)}>
                {plusSvgSecondary}
                Добавить в избранное
            </ButtonSmallPrimary>
        </div>
    );
};

export default FavoriteStub;
