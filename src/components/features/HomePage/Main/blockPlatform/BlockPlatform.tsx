import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/BlockPlatform.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";
import { Button } from "@/src/components/shared/buttons/Button";
import Slider from "@/src/components/shared/slider/Slider";
import ListCardsPlatforms from "@/src/components/entities/lists/listCardsPlatforms/ListCardsPlatforms";
import { useGetListPlatformsQuery, useGetPlatformsQuery } from "@/src/store/services/platforms";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { useRouter } from "next/router";

const BlockPlatform = () => {
    const { combinedData } = useInfiniteScroll(useGetListPlatformsQuery, {});
    const router = useRouter();
    const handleClick = () => {
        router.push("/platforms-filter");
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    На каких платформах могут быть реализованы решения
                </Title>
                <Text type={"reg16"} color={"grey"}>
                    Подберите конструктор чат-ботов и воспользуйтесь одним из наших шаблонов, разработанных под
                    конкретную бизнес-задачу
                </Text>
                <div className={styles.buttons}>
                    <Button active={true} width={250} type="button" onClick={handleClick}>
                        Подобрать платформу
                    </Button>
                    <LinkShowAllCards href="/platforms" />
                </div>
            </div>
            <Slider cardType="634" type="homeSlider">
                <ListCardsPlatforms results={combinedData} />
            </Slider>
        </div>
    );
};

export default BlockPlatform;
