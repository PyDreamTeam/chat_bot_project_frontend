import { FC, useState } from "react";
import styles from "./styles/Order.module.css";
import { PropsOrder } from "../types";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { useDeleteOrderMutation, useGetOrdersListQuery } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const Order: FC<PropsOrder> = ({ id, first_name, email, phone_number, comment, forceUpdate }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [deleteOrder, { isSuccess, error: errorData, isLoading }] = useDeleteOrderMutation();
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.orderNumber}>
                <Text type="reg16" color="grey">
                    {id}
                </Text>
            </div>
            <div className={styles.orderName}>
                <Text type="reg16" color="grey">
                    {first_name}
                </Text>
            </div>
            <div className={styles.orderEmail} data-tooltip={email}>
                <Text type="reg16" color="grey">
                    {email}
                </Text>
            </div>
            <div className={styles.orderPhone}>
                <Text type="reg16" color="grey">
                    {phone_number}
                </Text>
            </div>
            <div className={styles.orderComment} data-tooltip={comment}>
                <Text type="reg16" color="grey">
                    {comment}
                </Text>
            </div>
            <div className={styles.orderIconEdit}>
                <Image
                    src="/img/Edit.svg"
                    alt="edit"
                    width={20}
                    height={20}
                    onClick={() => {
                        router.push(`/my-account/orders/${id}`);
                    }}
                    className={styles.imgClose}
                />
            </div>
            <div className={styles.orderIconDelete}>
                <Image
                    src="/img/Delete.svg"
                    alt="edit"
                    width={18.5}
                    height={20}
                    onClick={() => {
                        deleteOrder({ token, id }).then(forceUpdate);
                    }}
                    className={styles.imgClose}
                />
            </div>
        </div>
    );
};
