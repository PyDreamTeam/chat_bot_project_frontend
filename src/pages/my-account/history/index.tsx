import React, { useState } from "react";
import styles from "./history.module.css";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import HistorySolutionsList from "@/src/components/entities/HistorySolutionsList/HistorySolutionsList";
import { useGetHistoryPlatformsQuery, useGetHistorySolutionsQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import FavoriteTabs from "@/src/components/entities/FavoriteTabs/FavoriteTabs";
import HistoryPlatformsList from "@/src/components/entities/HistoryPlatformsList/HistoryPlatformsList";

const tabs = ["Платформы", "Решения"];

const SearchHistoryPage = () => {
    const [key, setKey] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data: dataSolutions, isLoading: isLoadingSolutions } = useGetHistorySolutionsQuery(token, {
        refetchOnMountOrArgChange: true,
    });
    const { data: dataPlatforms, isLoading: isLoadingPlatforms } = useGetHistoryPlatformsQuery(token, {
        refetchOnMountOrArgChange: true,
    });

    console.log(dataSolutions);
    console.log(dataPlatforms);

    return (
        <AccountPageWrapper page="history">
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
                    <HistoryPlatformsList />
                    {/* <FavoritesPlatformsComponent forceUpdate={() => setKey((k) => k + 1)} /> */}
                </div>
                <div className={activeTab === 0 ? styles.inActiveSolutionContainer : styles.activeSolutionContainer}>
                    <HistorySolutionsList />
                    {/* <FavoritesSolutionsComponent forceUpdate={() => setKey((k) => k + 1)} /> */}
                </div>
            </div>
        </AccountPageWrapper>
    );
};

export default SearchHistoryPage;
