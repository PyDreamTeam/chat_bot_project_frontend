import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import AccountPageHeader from "@/src/components/features/AccountPage/AccountPageHeader/AccountPageHeader";
import SearchHistoryComponent from "@/src/components/entities/SearchHistoryComponent/SearchHistoryComponent";




const SearchHistoryPage = () => {
    return (
        <AccountPageWrapper page="history">
            <SearchHistoryComponent/>
        </AccountPageWrapper>
    );
};


export default SearchHistoryPage;