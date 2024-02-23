import React from "react";
import styles from "./HistoryPlatformsList.module.css";
import Cookies from "js-cookie";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useGetHistoryPlatformsQuery } from "@/src/store/services/userAuth";
import { HistoryPlatform } from "../HistoryPlatform/HistoryPlatform";
import uuid from "uuid-random";

const HistoryPlatformsList = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const {
        data: dataPlatforms,
        isLoading: isLoadingPlatforms,
        refetch,
    } = useGetHistoryPlatformsQuery(token, {
        refetchOnMountOrArgChange: true,
    });

    return (
        <div>
            {isLoadingPlatforms ? (
                <div className={styles.loader}>
                    <Loader isLoading={isLoadingPlatforms} />
                </div>
            ) : (
                <div>
                    {dataPlatforms?.results.length > 0 ? (
                        dataPlatforms?.results.map((item: any) => (
                            <HistoryPlatform
                                title={item.title}
                                image={item.image}
                                short_description={item.short_description}
                                id={item.id}
                                key={uuid()}
                                tags={item.tags}
                                forceUpdate={refetch}
                            />
                        ))
                    ) : (
                        <div className={styles.containerEmptyHistory}>
                            <Image
                                src="/img/Show.svg"
                                alt="edit"
                                width={120}
                                height={120}
                                className={styles.imgClose}
                            ></Image>
                            <Text type="med18btn" color="black" className={styles.text}>
                                История пуста
                            </Text>
                            <Text type="reg16" color="telegray" className={styles.text}>
                                Со временем история будет пополняться
                            </Text>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HistoryPlatformsList;
