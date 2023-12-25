import React, { useState } from "react";
import styles from "../favorites/favorite.module.css";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import FavoritesPlatformsComponent from "@/src/components/entities/FavoritesPlatformsComponent/FavoritesPlatformsComponent";
import FavoriteSearchComponent from "@/src/components/entities/FavoriteSearchComponent/FavoriteSearchComponent";
import FavoriteTabs from "@/src/components/entities/FavoriteTabs/FavoriteTabs";
import FavoritesSolutionsComponent from "@/src/components/entities/FavoritesSolutionsComponent/FavoritesSolutionsComponent";

const tabs = ["Платформы", "Решения"];

const FavoritesPage = () => {
    const [key, setKey] = useState(0);
    const [k, setK] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <AccountPageWrapper page="favorites">
            {/* <div>
                <FavoriteSearchComponent />
            </div> */}
            <div className={styles.tabs}>
                {tabs.map((tab, index) => (
                    <FavoriteTabs
                        key={index}
                        title={tab}
                        index={index}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                ))}
            </div>
            <div key={key}>
                <div className={activeTab === 1 ? styles.inActivePlatformContainer : styles.activePlatformContainer}>
                    <FavoritesPlatformsComponent forceUpdate={() => setKey((k) => k + 1)} />
                </div>
                <div className={activeTab === 0 ? styles.inActiveSolutionContainer : styles.activeSolutionContainer}>
                    <FavoritesSolutionsComponent forceUpdate={() => setKey((k) => k + 1)} />
                </div>
            </div>
        </AccountPageWrapper>
    );
};

export default FavoritesPage;
