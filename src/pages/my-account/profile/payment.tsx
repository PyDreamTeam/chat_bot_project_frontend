import React from "react";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import styles from "./profile.module.css";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import Image from "next/image";

const PaymentPage = () => {
    return (
        <AccountPageWrapper page="profile_payment">
            <div className={styles.paymentBlock}>
                <Title color={"red"} type={"h5"}>
                    🛠️ Страница находится в разработке 🛠️
                </Title>
            </div>
        </AccountPageWrapper>
    );
};

export default PaymentPage;
