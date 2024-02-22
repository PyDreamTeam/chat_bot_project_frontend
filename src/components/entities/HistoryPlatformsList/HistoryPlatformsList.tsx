import React from "react";
import styles from "./HistoryPlatformsList.module.css";
import Cookies from "js-cookie";
import { Loader } from "@/src/components/shared/Loader/Loader";
import { useGetHistoryPlatformsQuery } from "@/src/store/services/userAuth";
import { FavoritePlatform } from "../FavoritePlatform/FavoritePlatform";
import FavoriteStub from "../FavoriteStub/FavoriteStub";
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
                        <FavoriteStub text={"Избранных платформ пока нет"} link={"/platforms"} />
                    )}
                </div>
            )}
        </div>
    );
};

export default HistoryPlatformsList;
