import { FC } from "react";
import styles from "./styles/Order.module.css";
import { PropsOrder } from "../types";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";
import { useDeleteOrderMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";

export const Order: FC<PropsOrder> = ({ id, first_name, email, phone_number, comment }) => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [deleteOrder, { isSuccess, error: errorData, isLoading }] = useDeleteOrderMutation();

    return (
        // TODO: add id, phone, comment
        <div className={styles.container}>
            <div className={styles.orderNumber}>
                <Text type="reg16" color="grey">
                    {id + 1}
                </Text>
            </div>
            <div className={styles.orderName}>
                <Text type="reg16" color="grey">
                    {first_name}
                </Text>
            </div>
            <div className={styles.orderEmail}>
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
                    onClick={() => console.log(`edit order #${id}`)}
                    className={styles.imgClose}
                />
            </div>
            <div className={styles.orderIconDelete}>
                <Image
                    src="/img/Delete.svg"
                    alt="edit"
                    width={18.5}
                    height={20}
                    // TODO: add order id to onClick
                    onClick={() => {
                        console.log(`delete order #${id}`);
                        // deleteOrder(token);
                    }}
                    className={styles.imgClose}
                />
            </div>
        </div>
    );
};
