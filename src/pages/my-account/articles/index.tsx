import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import ArticlesPageComponent from "@/src/components/entities/ArticlesPageComponent/ArticlesPageComponent";


const ArticlesPage = () => {

    return (
        <AccountPageWrapper page="articles">
            <ArticlesPageComponent></ArticlesPageComponent>
        </AccountPageWrapper>
    );
};


export default ArticlesPage;