import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import FaqPageComponent from "@/src/components/entities/FaqPageComponent/FaqPageComponent";


const FaqPage = () => {

    return (
        <AccountPageWrapper page="faq">
            <FaqPageComponent></FaqPageComponent>
        </AccountPageWrapper>
    );
};


export default FaqPage;