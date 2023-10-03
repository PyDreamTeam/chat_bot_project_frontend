import React, { FC, useEffect, useRef, useState } from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import OrdersList from "./OrdersList/OrdersList";
import OrdersDeletedPopup from "./ordersPopups/OrdersDeletedPopup";
import Cookies from "js-cookie";
import OrdersEditedPopup from "./ordersPopups/OrdersEditedPopup";

const OrdersPage: FC = () => {
    const [openDel, setOpenDel] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);

    const [idDel, setIdDel] = useState<string | undefined>("");
    const [idEdit, setIdEdit] = useState<string | undefined>("");

    const handleToggleDelPopup = () => setOpenDel((prevState) => !prevState);
    const handleToggleEditPopup = () => setOpenEdit((prevState) => !prevState);

    const timerRefDel = useRef<NodeJS.Timeout | null>(null);
    const timerRefEdit = useRef<NodeJS.Timeout | null>(null);

    let orderDelId: string | undefined = "";
    let orderEditId: string | undefined = "";

    const startCloseDelTimer = () => {
        timerRefDel.current = setTimeout(() => {
            Cookies.set("Deleted_order", "");
            setOpenDel(false);
        }, 4000);
    };

    const startCloseEditTimer = () => {
        timerRefEdit.current = setTimeout(() => {
            Cookies.set("Edited_order", "");
            setOpenEdit(false);
        }, 4000);
    };

    useEffect(() => {
        orderDelId = Cookies.get("Deleted_order");
        orderEditId = Cookies.get("Edited_order");
        setIdDel(orderDelId);
        setIdEdit(orderEditId);

        if (orderDelId) {
            setOpenDel(true);
            startCloseDelTimer();
        }

        if (orderEditId) {
            setOpenEdit(true);
            startCloseEditTimer();
        }

        return () => {
            clearTimeout(timerRefDel.current as NodeJS.Timeout);
            clearTimeout(timerRefEdit.current as NodeJS.Timeout);
        };
    }, []);

    return (
        <AccountPageWrapper page="orders">
            <OrdersDeletedPopup activePopup={openDel} id={idDel} close={handleToggleDelPopup} />
            <OrdersEditedPopup activePopup={openEdit} id={idEdit} close={handleToggleEditPopup} />
            <OrdersList />
        </AccountPageWrapper>
    );
};

export default OrdersPage;
