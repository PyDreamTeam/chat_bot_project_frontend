import React, { useState, MouseEvent, FC, useEffect } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./BlockSolutionCard.module.css";
import Image from "next/image";
import { Button } from "@/src/components/shared/buttons/Button";
import Link from "next/link";
import { useModal } from "@/src/hooks/useModal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import Modal from "@/src/components/shared/modal/Modal";
import { PropsSolutionCard } from "@/src/components/entities/solutions/types";
import { ListDescription } from "@/src/components/entities/lists/listDescription";
import { useGetPlatformQuery } from "@/src/store/services/platforms";
import { useAddSolutionToFavoriteMutation } from "@/src/store/services/solutions";
import Cookies from "js-cookie";
import ToolTip from "@/src/components/shared/toolTip/ToolTip";
import { useDataUserQuery } from "@/src/store/services/userAuth";

const BlockSolutionCard: FC<PropsSolutionCard> = ({
    id,
    title,
    image,
    links_to_platform,
    is_favorite,
    advantages,
    platform,
}) => {
    const { isShown, toggle } = useModal();
    const [imageHeart, setImageHeart] = useState("dislike");
    const [addToFavorite] = useAddSolutionToFavoriteMutation();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const { isSuccess } = useDataUserQuery(token);

    const platformId = Number(links_to_platform ? links_to_platform[0] : null);

    const { data } = useGetPlatformQuery(platformId || skipToken);

    const handleClickHeart = (e: MouseEvent) => {
        if (!isSuccess) {
            e.stopPropagation();
            console.log("sign in!");
        } else {
            addToFavorite({ id, token });

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
        if (isSuccess) {
            if (is_favorite) {
                setImageHeart("like");
            } else {
                setImageHeart("dislike");
            }
        }
    }, [isSuccess]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <Image src={image ? image : ""} alt={"logo"} width={230} height={230} />
            </div>
            <div className={styles.blockRight}>
                <div className={styles.blockText}>
                    <div className={styles.solutionTitle}>
                        <Title type={"h3"} color={"black"}>
                            {title}
                        </Title>
                        <ToolTip text={"Зарегистрируйтесь,чтобы добавить в избранное"}>
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
                        </ToolTip>
                    </div>
                    <ListDescription advantages={advantages} />
                </div>
                <Link href={`/platforms/platform/${data?.id}`}>
                    <div className={styles.blockPlatform}>
                        <div className={styles.platformImg}>
                            <Image src={platform ? platform : ""} alt={"ComplexFunnel"} width={40} height={40} />
                        </div>
                        <Title type={"h5"} color={"black"}>
                            {data?.title}
                        </Title>
                    </div>
                </Link>
                <div className={styles.blockBtn}>
                    <div className={styles.button}>
                        <Button type="button" active={true} onClick={toggle}>
                            Оформить заявку
                        </Button>
                    </div>
                    <Link href={"#video"} className={styles.btnPlay}>
                        <Text type={"reg16"} color={"blue"}>
                            Посмотреть как это работает
                        </Text>
                        <Image src={"/page/ArrowSquareOut.svg"} alt={"Play"} width={18} height={18} />
                    </Link>
                </div>
            </div>
            <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} dataComment={`Выбранное решение: ${title}`} />
            </Modal>
        </div>
    );
};

export default BlockSolutionCard;
