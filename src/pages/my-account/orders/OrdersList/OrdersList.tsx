import React, { useState } from "react";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/OrdersList.module.css";
import Orders from "./Orders";

const OrdersList = () => {
    const [key, setKey] = useState(0);

    return (
        <div className={styles.ordersListWrapper} key={key}>
            <div className={styles.listHeader}>
                <div className={styles.orderNumber}>
                    <Text type="sem16" color="dark">
                        Заказ
                    </Text>
                </div>
                <div className={styles.orderName}>
                    <Text type="sem16" color="dark">
                        Имя
                    </Text>
                </div>
                <div className={styles.orderEmail}>
                    <Text type="sem16" color="dark">
                        E-mail
                    </Text>
                </div>
                <div className={styles.orderPhone}>
                    <Text type="sem16" color="dark">
                        Номер телефона
                    </Text>
                </div>
                <div className={styles.orderComment}>
                    <Text type="sem16" color="dark">
                        Комментарий
                    </Text>
                </div>
            </div>
            <Orders forceUpdate={() => setKey((k) => k + 1)} />
        </div>
    );
};

export default OrdersList;
