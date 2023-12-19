import React, { useEffect, useRef, useState } from "react";
import Header from "@/src/components/features/HomePage/Header/Header";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Link from "next/link";
import Image from "next/image";
import styles from "@/src/pages/platforms/platforms.module.css";
import { Button } from "@/src/components/shared/buttons/Button";
import {
    useGetFavoritePlatformsQuery,
    useGetListPlatformsQuery,
    useGetPlatformsQuery,
} from "@/src/store/services/platforms";
import { InfiniteScroll } from "@/src/components/entities/platforms/rightBlock/InfiniteScroll/InfiniteScroll";
import { useAppSelector } from "@/src/hooks/types";
import useInfiniteScroll from "@/src/hooks/useInfiniteScroll";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";
import { ButtonOrder } from "@/src/components/shared/buttons/ButtonOrder";
import { useRouter } from "next/router";
import CardPlatform from "@/src/components/shared/tabs/cardPlatform/CardPlatform";
import Cookies from "js-cookie";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import CardSkeleton from "@/src/components/shared/tabs/cardSkeleton/CardSkeleton";

const Platforms = () => {
    const router = useRouter();
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const skeletons = [...new Array(6)];

    const handleClick = (idp: number) => {
        router.push(`/platforms/platform/${idp}`);
    };

    // const { combinedData, isLoading, readMore, refresh, isFetching } = useInfiniteScroll(useGetListPlatformsQuery, {});
    const { data, isLoading: isLoadingUnreg } = useGetListPlatformsQuery({});

    const {
        data: combinedData,
        isLoading,
        refetch,
        isFetching,
    } = useGetFavoritePlatformsQuery(token, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
    });
    console.log(combinedData);
    const handleScroll = () => {
        // readMore();
    };

    return (
        <div>
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
                                Платформы
                            </Title>
                        </div>
                        <div className={styles.text}>
                            <Text type="reg18" color="grey">
                                Подберите платформу и воспользуйтесь одним из наших шаблонов, разработанных под
                                конкретную бизнес-задачу
                            </Text>
                        </div>
                    </div>
                    <div className={styles.mainWrap}>
                        {isLoading ? (
                            <div className={styles.loaderPlatforms}>
                                {skeletons.map((_, index) => (
                                    <CardSkeleton type={"list"} key={index} />
                                ))}
                                {/* <Loader isLoading={isLoading} /> */}
                            </div>
                        ) : (
                            <ul className={styles.platforms}>
                                {combinedData
                                    ? combinedData.results
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
                                                  <CardPlatform
                                                      id={item.id}
                                                      title={item.title}
                                                      short_description={item.short_description}
                                                      tags={item.tags}
                                                      image={item.image}
                                                      is_favorite={item.is_favorite}
                                                  />
                                              </li>
                                          ))
                                    : data.results
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
                                                  <CardPlatform
                                                      id={item.id}
                                                      title={item.title}
                                                      short_description={item.short_description}
                                                      tags={item.tags}
                                                      image={item.image}
                                                      is_favorite={item.is_favorite}
                                                  />
                                              </li>
                                          ))}
                                <div className={styles.loaderPlatforms}>
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
                                <Link className={styles.link} href="/platforms-filter">
                                    Подобрать платформу
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <ButtonOrder />
                    <ButtonScrollToUp />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Platforms;
