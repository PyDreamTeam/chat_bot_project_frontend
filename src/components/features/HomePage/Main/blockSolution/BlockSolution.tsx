import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import styles from "@/src/components/features/HomePage/Main/blockSolution/styles/BlockSolution.module.css";
import LinkShowAllCards from "@/src/components/shared/links/LinkShowAllCards";
import { Button } from "@/src/components/shared/buttons/Button";
import Slider from "@/src/components/shared/slider/Slider";
import ListCardsSolutions from "@/src/components/entities/lists/listCardsSolutions/ListCardsSolutions";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import { useGetFavoriteSolutionsQuery, useGetListSolutionsQuery } from "@/src/store/services/solutions";
import useInfiniteScrollSolutions from "@/src/hooks/useInfinityScrollPlatforms";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const BlockSolution = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const router = useRouter();
    const handleClick = () => {
        router.push("/solutions-filter");
    };
    // const { combinedData } = useInfiniteScrollSolutions(useGetListSolutionsQuery, {});

    const { data, isLoading: isLoadingUnreg } = useGetListSolutionsQuery({});

    const {
        data: combinedData,
        isLoading,
        refetch,
        isSuccess,
    } = useGetFavoriteSolutionsQuery(token, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.blockText}>
                <Title type={"h3"} color={"black"}>
                    Примеры решений
                </Title>
                <Text type={"reg16"} color={"grey"}>
                    Подберите конструктор чат-ботов и воспользуйтесь одним из наших шаблонов, разработанных под
                    конкретную бизнес-задачу
                </Text>
                <div className={styles.buttons}>
                    <Button active={true} width={250} type="button" onClick={handleClick}>
                        Подобрать решение
                    </Button>
                    <LinkShowAllCards href="/solutions" />
                </div>
            </div>
            {isLoading ? (
                <>Loading ....</>
            ) : combinedData ? (
                <Slider cardType="644" type="homeSlider">
                    <ListCardsSolutions
                        results={combinedData.results.filter((item: any) => item.status === "public")}
                    />
                </Slider>
            ) : (
                <Slider cardType="644" type="homeSlider">
                    <ListCardsSolutions results={data?.results.filter((item: any) => item.status === "public")} />
                </Slider>
            )}
        </div>
    );
};

export default BlockSolution;
