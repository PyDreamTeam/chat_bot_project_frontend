import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import OrdersList from "./OrdersList/OrdersList";

const OrdersPage = () => {
    return (
        <AccountPageWrapper page="orders">
            <OrdersList />
        </AccountPageWrapper>
    );
};

export default OrdersPage;
