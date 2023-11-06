import React, {FC} from "react";
import { FavoritePlatform } from "../FavoritePlatform/FavoritePlatform";
import { useGetFavoritePlatformsQuery } from "@/src/store/services/platforms";
import Cookies from "js-cookie";
import FavoriteStub from "../FavoriteStub/FavoriteStub";



export interface IFavoritesPlatformComponent {
    forceUpdate: () => void;
}


const FavoritesPlatformsComponent: FC<IFavoritesPlatformComponent> = ({forceUpdate}) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const {data: platform} = useGetFavoritePlatformsQuery(token, {
        refetchOnMountOrArgChange: true,
    });

    return (
        <div>
            {platform?.results.filter((item: any) => item.is_favorite).length > 0  ? 
                platform?.results.filter((item: any) => item.is_favorite).map((item: any) => (
                    <FavoritePlatform
                        title={item.title}
                        image={item.image}
                        short_description={item.short_description}
                        id = {item.id}
                        key = {item.id}
                        tags = {item.tags}
                        forceUpdate={() => forceUpdate()}
                    />
                )) : <FavoriteStub text={"Избранных платформ пока нет"} link={"/platforms"}/>}
        </div>
    );
};

export default FavoritesPlatformsComponent;