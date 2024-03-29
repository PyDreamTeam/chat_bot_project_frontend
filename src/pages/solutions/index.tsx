import React, { useState } from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Image from "next/image";
import styles from "@/src/pages/solutions/solutions.module.css";
// import ListAllSolutions from "@/src/components/entities/lists/listAllSolutions/ListAllSolutions";
import { Button } from "@/src/components/shared/buttons/Button";
import { useGetFavoriteSolutionsQuery, useGetSolutionsQuery } from "@/src/store/services/solutions";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import Cookies from "js-cookie";
import CardSkeleton from "@/src/components/shared/tabs/cardSkeleton/CardSkeleton";
import CardSolution from "@/src/components/shared/tabs/cardSolution/CardSolution";
import { useRouter } from "next/router";

const Solutions = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const skeletons = [...new Array(6)];

    // const { combinedData, isLoading, readMore, isFetching } = useInfiniteScroll(useGetSolutionsQuery, {});

    const { data: dataUnreg, isLoading: isLoadingUnreg } = useGetSolutionsQuery({});

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
    console.log(combinedData);
    const router = useRouter();
    const handleClick = (idp: number) => {
        router.push(`/solutions/solution/${idp}`);
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
                                {skeletons.map((_, index) => (
                                    <CardSkeleton type={"list"} key={index} />
                                ))}
                            </div>
                        ) : (
                            <ul className={styles.solutions}>
                                {combinedData
                                    ? combinedData?.results
                                          .filter((item: any) => item.status === "public")
                                          .map((item: any) => (
                                              <li
                                                  className={styles.click}
                                                  key={item.id}
                                                  onClick={() => {
                                                      if (item.id) {
                                                          handleClick(item.id);
                                                      }
                                                  }}
                                              >
                                                  <CardSolution
                                                      type="other"
                                                      id={item.id}
                                                      image={item.image}
                                                      title={item.title}
                                                      price={item.price}
                                                      short_description={item.short_description}
                                                      tags={item.tags}
                                                      is_favorite={item.is_favorite}
                                                  />
                                              </li>
                                          ))
                                    : dataUnreg?.results
                                          .filter((item: any) => item.status === "public")
                                          .map((item: any) => (
                                              <li
                                                  className={styles.click}
                                                  key={item.id}
                                                  onClick={() => {
                                                      if (item.id) {
                                                          handleClick(item.id);
                                                      }
                                                  }}
                                              >
                                                  <CardSolution
                                                      type="other"
                                                      id={item.id}
                                                      image={item.image}
                                                      title={item.title}
                                                      price={item.price}
                                                      short_description={item.short_description}
                                                      tags={item.tags}
                                                      is_favorite={item.is_favorite}
                                                  />
                                              </li>
                                          ))}
                                <div className={styles.loaderSolutions}>
                                    <Loader isLoading={isFetching} />
                                </div>
                                {combinedData?.length > 0 && <InfiniteScroll onLoadMore={handleScroll} />}
                            </ul>
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
            <Footer />
        </>
    );
};

export default Solutions;
