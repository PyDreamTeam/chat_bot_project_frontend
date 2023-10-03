import FavoritesPageComponent from "@/src/components/entities/FavoritesPageComponent/FavoritePageComponent";
import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";




const FavoritesPage = () => {
    return (
        <AccountPageWrapper page="favorites">
            <FavoritesPageComponent/>
        </AccountPageWrapper>
    );
};


export default FavoritesPage;