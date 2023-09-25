import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import TariffPageComponent from "@/src/components/entities/TariffPageComponents/TariffPage.Component";


const TariffPage = () => {

    return (
        <AccountPageWrapper page="tariff">
            <TariffPageComponent></TariffPageComponent>
        </AccountPageWrapper>
    );
};


export default TariffPage;