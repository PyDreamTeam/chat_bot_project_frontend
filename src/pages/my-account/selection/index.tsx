import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import SelectionPageComponent from "@/src/components/entities/SelectionPageComponent/SelectionPageComponent";




const SelectionPage = () => {
    return (
        <AccountPageWrapper page="selection">
            <SelectionPageComponent/>
        </AccountPageWrapper>
    );
};


export default SelectionPage;