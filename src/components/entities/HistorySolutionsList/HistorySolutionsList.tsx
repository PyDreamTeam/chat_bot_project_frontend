import React from "react";
import styles from "./HistorySolutionsList.module.css";
import Cookies from "js-cookie";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useGetHistorySolutionsQuery } from "@/src/store/services/userAuth";
import { HistorySolution } from "../HistorySolution/HistorySolution";
import uuid from "uuid-random";

const HistorySolutionsList = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");

    const {
        data: dataSolutions,
        isLoading: isLoadingSolutions,
        refetch,
    } = useGetHistorySolutionsQuery(token, {
        refetchOnMountOrArgChange: true,
    });

    return (
        <div>
            {isLoadingSolutions ? (
                <div className={styles.loader}>
                    <Loader isLoading={isLoadingSolutions} />
                </div>
            ) : (
                <div>
                    {dataSolutions?.results.length > 0 ? (
                        dataSolutions?.results.map((item: any) => (
                            <HistorySolution
                                title={item.title}
                                image={item.image}
                                short_description={item.short_description}
                                id={item.id}
                                key={uuid()}
                                tags={item.tags}
                                forceUpdate={refetch}
                                price={item.price}
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

export default HistorySolutionsList;
