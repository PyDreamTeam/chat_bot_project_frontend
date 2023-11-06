import React from "react";
import Image from "next/image";
import styles from "../FavoriteSearchComponent/FavoriteSearchComponent.module.css";




const FavoriteSearhComponent = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/img/Icon_найти_платформу.svg"
                alt="search"
                width={24}
                height={24}
                className={styles.loop}
            />
            <input className={styles.input} placeholder="Поиск"></input>
        </div>
    );
};


export default FavoriteSearhComponent;