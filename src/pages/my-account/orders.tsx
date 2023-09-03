import React from "react";
import uuid from "uuid-random";
import AccountPageWrapper from "@/src/components/wrappers/AccountpageWrapper";
import { Loader } from "@/src/components/shared/Loader/Loader";
import styles from "./styles/orders.module.css";
import { useGetOrdersListQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { PropsOrder } from "@/src/components/entities/orders/types";
import { Order } from "@/src/components/entities/orders/Order/Order";
import Text from "@/src/components/shared/text/Text";

const Orders = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data: dataOrders, isLoading: isLoadingOrders } = useGetOrdersListQuery(token);
    return (
        <AccountPageWrapper page="orders">
            <div className={styles.ordersListWrapper}>
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
                {isLoadingOrders ? (
                    <div className={styles.loaderPlatforms}>
                        <Loader isLoading={isLoadingOrders} />
                    </div>
                ) : (
                    <ul className={styles.listOrders}>
                        {dataOrders?.results.map((item: PropsOrder) => (
                            <li
                                key={uuid()}
                                onClick={() => {
                                    if (item) {
                                        console.log(dataOrders?.results.indexOf(item));
                                    }
                                }}
                            >
                                <Order
                                    id={dataOrders?.results.indexOf(item)}
                                    first_name={item.first_name}
                                    email={item.email}
                                    phone_number={item.phone_number}
                                    comment={item.comment}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </AccountPageWrapper>
    );
};

export default Orders;
