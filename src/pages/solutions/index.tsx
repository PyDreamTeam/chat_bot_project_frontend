import React from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Image from "next/image";
import styles from "@/src/pages/solutions/solutions.module.css";
import ListAllSolutions from "@/src/components/entities/lists/listAllSolutions/ListAllSolutions";
import { Button } from "@/src/components/shared/buttons/Button";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import { useGetFavoriteSolutionsQuery, useGetSolutionsQuery } from "@/src/store/services/solutions";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import Cookies from "js-cookie";

const Solutions = () => {
    // const { isShown, toggle } = useModal();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    // const { combinedData, isLoading, readMore, isFetching } = useInfiniteScroll(useGetSolutionsQuery, {});

    const { data, isLoading: isLoadingUnreg } = useGetSolutionsQuery({});

    const {
        data: combinedData,
        isLoading,
        refetch,
        isFetching,
    } = useGetFavoriteSolutionsQuery(token, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
    });

    const handleScroll = () => {
        // readMore();
    };

    return (
        <>
            <Header type="other" />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.topWrap}>
                        <Text type="reg14" color="telegray">
                            <Link href={"/home"} className={styles.path}>
                                Главная
                            </Link>
                            / <span className={styles.path}>Посмотреть все</span>
                        </Text>
                        <div className={styles.title}>
                            <Title type="h3" color="dark">
                                Примеры решений
                            </Title>
                        </div>
                        <div className={styles.text}>
                            <Text type="reg18" color="grey">
                                Подберите конструктор чат-ботов и воспользуйтесь одним из наших шаблонов, разработанных
                                под конкретную бизнес-задачу
                            </Text>
                        </div>
                    </div>
                    <div className={styles.mainWrap}>
                        {isLoading ? (
                            <div className={styles.loaderSolutions}>
                                <Loader isLoading={isLoading} />
                            </div>
                        ) : combinedData ? (
                            <>
                                <ListAllSolutions results={combinedData.results} />
                                <div className={styles.loaderSolutions}>
                                    <Loader isLoading={isFetching} />
                                </div>
                                {combinedData.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />}
                            </>
                        ) : (
                            <>
                                <ListAllSolutions results={data?.results} />
                                <div className={styles.loaderSolutions}>
                                    <Loader isLoading={isFetching} />
                                </div>
                                {data?.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />}
                            </>
                        )}
                    </div>
                    <div className={styles.bottomWrap}>
                        <div className={styles.blockLeft}>
                            <Image src="/img/platforms.png" alt="platforms" width={615} height={462}></Image>
                        </div>
                        <div className={styles.blockRight}>
                            <Title type="h3" color="dark">
                                Подберите конструктор чат-ботов
                            </Title>
                            <div className={styles.description}>
                                <Text type="reg18" color="grey">
                                    Воспользуйтесь одним из наших шаблонов, разработанных под конкретную бизнес-задачу
                                </Text>
                            </div>
                            <Button active={true} width={250} type="button">
                                <Link className={styles.link} href="/solutions-filter">
                                    Подобрать решение
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <ButtonOrder />
                    <ButtonScrollToUp />
                </div>
            </div>
            {/* <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} />
            </Modal> */}
            <Footer />
        </>
    );
};

export default Solutions;
