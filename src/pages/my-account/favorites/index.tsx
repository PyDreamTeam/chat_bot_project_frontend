import React, {useState} from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import FavoritesPlatformsComponent from "@/src/components/entities/FavoritesPageComponent/FavoritesPageComponent";
import styles from "../favorites/favorite.module.css";
import { PlatformCard } from "@/src/components/entities/platforms/rightBlock/PlatformCard/PlatformCard";
import { useGetFavoritePlatformsQuery } from "@/src/store/services/platforms";
import Cookies from "js-cookie";



const FavoritesPage = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const {data: card} = useGetFavoritePlatformsQuery(token);

    return (
        <AccountPageWrapper page="favorites">
            <FavoritesPlatformsComponent/>
            <div>
                {card?.results.filter((item: any) => item.is_favorite === true).map((item: any) => (
                    <PlatformCard
                        title={item.title}
                        type="filter"
                        image={item.image}
                        short_description={item.short_description}
                        id = {item.id}
                        key = {item.id}
                        tags = {item.tags}
                    />
                ))}
            </div>
        </AccountPageWrapper>
    );
};


export default FavoritesPage;