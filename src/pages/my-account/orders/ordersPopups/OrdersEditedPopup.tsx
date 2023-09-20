import React, { FC, FormEvent, MouseEventHandler } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/OrdersEditedPopup.module.css";
import Title from "@/src/components/shared/text/Title";

interface IOrdersEditedPopup {
    activePopup?: boolean;
    id: string | undefined;
    close: () => void;
}

const OrdersEditedPopup: FC<IOrdersEditedPopup> = ({ activePopup, id, close }) => {
    return (
        <div className={`${styles.ordersEditedPopup} ${activePopup ? styles.active : null}`}>
            <div className={styles.popupWrapper}>
                <Image
                    src="/img/ep_success-filled.svg"
                    alt="imgSuccess"
                    width={24}
                    height={24}
                    className={styles.imgSuccess}
                />
                <div className={styles.textSuccess}>
                    <Title type="h6" color="black">
                        {`Заказ ${id} успешно изменен!`}
                    </Title>
                    <Text type="reg16" color="telegray">
                        Наши специалисты свяжутся с вами в течение суток
                    </Text>
                </div>
                <div className={styles.imgCloseContainer}>
                    <Image
                        src="/sign/close.svg"
                        alt="close"
                        width={24}
                        height={24}
                        onClick={close}
                        className={styles.imgClose}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrdersEditedPopup;
