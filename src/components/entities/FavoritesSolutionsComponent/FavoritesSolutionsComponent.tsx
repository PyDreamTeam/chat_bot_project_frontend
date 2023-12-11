import React, { FC } from "react";
import { FavoriteSolution } from "../FavoriteSolution/FavoriteSolution";
import { useGetFavoriteSolutionsQuery } from "@/src/store/services/solutions";
import Cookies from "js-cookie";
import FavoriteStub from "../FavoriteStub/FavoriteStub";
import { Loader } from "../../shared/Loader/Loader";
import styles from "../FavoritesSolutionsComponent/FavorutesSolutionsComponent.module.css";

export interface IFavoritesSolutionComponent {
    forceUpdate: () => void;
}

const FavoritesSolutionsComponent: FC<IFavoritesSolutionComponent> = ({ forceUpdate }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const {
        data: solution,
        refetch,
        isLoading,
    } = useGetFavoriteSolutionsQuery(token, {
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
                    {solution?.results.filter((item: any) => item.is_favorite).length > 0 ? (
                        solution?.results
                            .filter((item: any) => item.is_favorite)
                            .map((item: any) => (
                                <FavoriteSolution
                                    title={item.title}
                                    image={item.image}
                                    short_description={item.short_description}
                                    id={item.id}
                                    key={item.id}
                                    price={item.price}
                                    tags={item.tags}
                                    forceUpdate={refetch}
                                />
                            ))
                    ) : (
                        <FavoriteStub text={"Избранных решений пока нет"} link={"/solutions"} />
                    )}
                </div>
            )}
        </div>
    );
};

export default FavoritesSolutionsComponent;
