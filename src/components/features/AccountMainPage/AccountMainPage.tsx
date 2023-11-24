import React from "react";
import styles from "../AccountMainPage/AccountMainPage.module.css";
import { ACCOUNT_MAIN_CONFIG } from "./AccountPageMainConfig";
import CardAccountMainPage from "../../entities/CardAccountMainPage/CardAccountMainPage";


const AccountMainPage = () => {
    return (
        <div className={styles.container}>
            {ACCOUNT_MAIN_CONFIG.map((item) => (
                <CardAccountMainPage
                    title = {item.title}
                    key = {item.id}
                    icon = {item.icon}
                    href= {item.href}
                />
            ))}
        </div>
    );
};

export default AccountMainPage;

