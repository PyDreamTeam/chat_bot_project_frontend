import React, { FC, useState } from "react";
import styles from "./styles/styles.module.css";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

interface ButtonFavoriteProps {
    text: string;
}

const ButtonFavorites: FC<ButtonFavoriteProps> = ({ text }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { isSuccess } = useDataUserQuery(token);

    const handleClick = () => {
        if (isSuccess) {
            setIsFavorite(!isFavorite);
        }
    };

    return (
        <button className={styles.btnFavorites} onClick={handleClick}>
            {isFavorite ? "Удалить из избранного" : "Добавить в избранное"} {text}
        </button>
    );
};

export default ButtonFavorites;
