import React from "react";
import styles from "../FavoriteTabs/FavoriteTabs.module.css";


export interface IFavoriteTabs {
    title: string;
    index: number;
    activeTab: number;
    setActiveTab: any;
}



const FavoriteTabs =  ({title, index, setActiveTab, activeTab}: IFavoriteTabs) => {
    return (
        <div className={styles.container}>
            <a onClick={()=> setActiveTab(index)} 
                className={index === activeTab ? styles.tabdisabled : styles.tab}>{title}</a>
        </div>
    );
};
    
export default FavoriteTabs;
