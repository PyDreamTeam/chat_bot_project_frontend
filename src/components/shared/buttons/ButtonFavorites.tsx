import React, { FC, useState } from "react";
import styles from "./styles/styles.module.css";

interface ButtonFavoriteProps {
    text: string;
}

const ButtonFavorites: FC<ButtonFavoriteProps> = ({ text }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <button className={styles.btnFavorites} onClick={handleClick}>
            {isFavorite ? "Удалить с избранного" : "Добавить в избранное"} {text}
        </button>
    );
};

export default ButtonFavorites;
