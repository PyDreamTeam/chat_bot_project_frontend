import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import React, {useEffect} from "react";
import { useRouter } from "next/router";
import Fav from "./Fav/Fav";


const FavoritesPage = () => {

    return (
        <AccountPageWrapper page="favorites">
            <Fav></Fav>
        </AccountPageWrapper>
    );
};

export default FavoritesPage;