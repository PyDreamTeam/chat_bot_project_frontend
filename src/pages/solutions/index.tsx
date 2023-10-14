import React from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/src/pages/solutions/solutions.module.css";
import ListAllSolutions from "@/src/components/entities/lists/listAllSolutions/ListAllSolutions";
import { Button } from "@/src/components/shared/buttons/Button";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import { useGetListSolutionsQuery } from "@/src/store/services/solutions";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";

const Solutions = () => {
    const { isShown, toggle } = useModal();
    const router = useRouter();
    const onClick = () => {
        router.push("/solutions-filter");
    };

    const { combinedData, isLoading, readMore, isFetching } = useInfiniteScroll(useGetListSolutionsQuery, {});

    const handleScroll = () => {
        readMore();
    };

    return (
        <>
            <Header type="other" />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.topWrap}>
                        <Text type="reg14" color="telegray">
                            <Link href={"/home"} className={styles.link}>
                                Главная
                            </Link>
                            / <span className={styles.link}>Посмотреть все</span>
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
                        ) : (
                            <>
                                <ListAllSolutions results={combinedData} />
                                <div className={styles.loaderSolutions}>
                                    <Loader isLoading={isFetching} />
                                </div>
                                {combinedData.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />}
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

                            <Button active={true} width={250} type="button" onClick={onClick}>
                                Подобрать решение
                            </Button>
                        </div>
                    </div>
                    <ButtonOrder />
                    <ButtonScrollToUp />
                </div>
            </div>
            <Modal isShown={isShown} hide={toggle}>
                <SelectionRequest close={toggle} />
            </Modal>
            <Footer />
        </>
    );
};

export default Solutions;
