import React, { FC } from "react";
import styles from "../FavoritesPlatformsComponent/FavoritesPlatfromsComponent.module.css";
import { FavoritePlatform } from "../FavoritePlatform/FavoritePlatform";
import { useGetFavoritePlatformsQuery } from "@/src/store/services/platforms";
import Cookies from "js-cookie";
import FavoriteStub from "../FavoriteStub/FavoriteStub";
import { Loader } from "../../shared/Loader/Loader";

export interface IFavoritesPlatformComponent {
    forceUpdate: () => void;
}

const FavoritesPlatformsComponent: FC<IFavoritesPlatformComponent> = ({ forceUpdate }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const {
        data: platform,
        refetch,
        isLoading,
    } = useGetFavoritePlatformsQuery(token, {
        refetchOnMountOrArgChange: true,
    });

    return (
        <div>
            {isLoading ? (
                <div className={styles.loader}>
                    <Loader isLoading={isLoading} />
                </div>
            ) : (
                <div>
                    {platform?.results.filter((item: any) => item.is_favorite).length > 0 ? (
                        platform?.results
                            .filter((item: any) => item.is_favorite)
                            .map((item: any) => (
                                <div key={item.id}>
                                    <FavoritePlatform
                                        title={item.title}
                                        image={item.image}
                                        short_description={item.short_description}
                                        id={item.id}
                                        key={item.id}
                                        tags={item.tags}
                                        forceUpdate={refetch}
                                    />
                                </div>
                            ))
                    ) : (
                        <FavoriteStub text={"Избранных платформ пока нет"} link={"/platforms"} />
                    )}
                </div>
            )}
        </div>
    );
};

export default FavoritesPlatformsComponent;
