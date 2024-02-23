import React, { useState } from "react";
import styles from "./history.module.css";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import HistorySolutionsList from "@/src/components/entities/HistorySolutionsList/HistorySolutionsList";
import FavoriteTabs from "@/src/components/entities/FavoriteTabs/FavoriteTabs";
import HistoryPlatformsList from "@/src/components/entities/HistoryPlatformsList/HistoryPlatformsList";
import { ButtonScrollToUp } from "@/src/components/shared/buttons/ButtonScrollToUp";

const tabs = ["Платформы", "Решения"];

const SearchHistoryPage = () => {
    const [activeTab, setActiveTab] = useState(0);

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
            <div className={activeTab === 1 ? styles.inActivePlatformContainer : styles.activePlatformContainer}>
                <HistoryPlatformsList />
            </div>
            <div className={activeTab === 0 ? styles.inActiveSolutionContainer : styles.activeSolutionContainer}>
                <HistorySolutionsList />
            </div>
            <ButtonScrollToUp />
        </AccountPageWrapper>
    );
};

export default SearchHistoryPage;
