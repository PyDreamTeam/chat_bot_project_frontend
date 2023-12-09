import React, { useEffect, useState } from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/BlockPlatform.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";
import { Button } from "@/src/components/shared/buttons/Button";
import Slider from "@/src/components/shared/slider/Slider";
import ListCardsPlatforms from "@/src/components/entities/lists/listCardsPlatforms/ListCardsPlatforms";
import { useGetFavoritePlatformsQuery, useGetListPlatformsQuery } from "@/src/store/services/platforms";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { PropsPlatformCard } from "@/src/components/entities/platforms/types";

const BlockPlatform = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    // const { combinedData } = useInfiniteScroll(useGetListPlatformsQuery, {});
    const { data, isLoading: isLoadingUnreg, isSuccess: isSuccessUnreg } = useGetListPlatformsQuery({});

    const {
        data: combinedData,
        isLoading,
        refetch,
        isFetching,
        isSuccess,
    } = useGetFavoritePlatformsQuery(token, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
    });
    const [platforms, setPlatforms] = useState<PropsPlatformCard[]>([]);
    const router = useRouter();
    const handleClick = () => {
        router.push("/platforms-filter");
    };

    useEffect(() => {
        if (isSuccess) {
            setPlatforms(combinedData.results);
        } else {
            setPlatforms(data?.results);
        }
    }, [isSuccess, isSuccessUnreg]);

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
            <Slider cardType="644" type="homeSlider">
                <ListCardsPlatforms results={platforms} />
            </Slider>
        </div>
    );
};

export default BlockPlatform;
