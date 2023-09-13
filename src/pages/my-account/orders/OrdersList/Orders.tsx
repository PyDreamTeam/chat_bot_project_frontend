import React, { FC, useState } from "react";
import uuid from "uuid-random";
import { Loader } from "@/src/components/shared/Loader/Loader";
import styles from "./styles/OrdersList.module.css";
import Cookies from "js-cookie";
import { useGetOrdersListQuery } from "@/src/store/services/userAuth";
import { PropsOrder, PropsOrders } from "@/src/components/entities/orders/types";
import { Order } from "@/src/components/entities/orders/Order/Order";

const Orders: FC<PropsOrders> = ({ forceUpdate }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data: dataOrders, isLoading: isLoadingOrders } = useGetOrdersListQuery(token, {
        refetchOnMountOrArgChange: true,
    });

    return (
        <div>
            {isLoadingOrders ? (
                <div className={styles.loaderOrders}>
                    <Loader isLoading={isLoadingOrders} />
                </div>
            ) : (
                <ul className={styles.listOrders}>
                    {dataOrders.results.map((item: PropsOrder) => (
                        <li key={uuid()}>
                            <Order
                                id={item.id}
                                first_name={item.first_name}
                                email={item.email}
                                phone_number={item.phone_number}
                                comment={item.comment}
                                forceUpdate={() => forceUpdate()}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Orders;
