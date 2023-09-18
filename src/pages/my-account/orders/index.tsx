import React, { useEffect, useRef, useState } from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import OrdersList from "./OrdersList/OrdersList";
import OrdersPopup from "./OrdersPopup/OrdersPopup";
import Cookies from "js-cookie";

const OrdersPage = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<string | undefined>("");

    const handleTogglePopup = () => setOpen((prevState) => !prevState);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    let orderId: string | undefined = "";

    const startCloseTimer = () => {
        timerRef.current = setTimeout(() => {
            handleTogglePopup();
            Cookies.set("Deleted_order", "");
        }, 5000);
    };

    useEffect(() => {
        orderId = Cookies.get("Deleted_order");
        setId(orderId);
        if (orderId) {
            setOpen(true);
            startCloseTimer();
        }
        return () => clearTimeout(timerRef.current as NodeJS.Timeout);
    }, []);
    return (
        <AccountPageWrapper page="orders">
            <OrdersPopup activePopup={open} id={id} close={handleTogglePopup} />
            <OrdersList />
        </AccountPageWrapper>
    );
};

export default OrdersPage;
