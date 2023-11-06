import React, {FC} from "react";
import { FavoriteSolution } from "../FavoriteSolution/FavoriteSolution";
import { useGetFavoriteSolutionsQuery } from "@/src/store/services/solutions";
import Cookies from "js-cookie";
import FavoriteStub from "../FavoriteStub/FavoriteStub";



export interface IFavoritesSolutionComponent {
    forceUpdate: () => void;
}


const FavoritesSolutionsComponent: FC<IFavoritesSolutionComponent> = ({forceUpdate}) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const {data: solution} = useGetFavoriteSolutionsQuery(token, {
        refetchOnMountOrArgChange: true,
    });

    return (
        <div>
            {solution?.results.filter((item: any) => item.is_favorite).length > 0  ? 
                solution?.results.filter((item: any) => item.is_favorite).map((item: any) => (
                    <FavoriteSolution
                        title={item.title}
                        image={item.image}
                        short_description={item.short_description}
                        id = {item.id}
                        key = {item.id}
                        price={item.price}
                        tags = {item.tags}
                        forceUpdate={() => forceUpdate()}
                    />
                )) : <FavoriteStub text={"Избранных решений пока нет"} link={"/solutions"}/>}
        </div>
    );
};

export default FavoritesSolutionsComponent;