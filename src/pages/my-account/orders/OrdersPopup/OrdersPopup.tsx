import React, { FC, FormEvent, MouseEventHandler } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import styles from "./styles/OrdersPopup.module.css";

import uuid from "uuid-random";
import Title from "@/src/components/shared/text/Title";

interface IOrdersPopup {
    activePopup?: boolean;
    id: string | undefined;
    close: () => void;
}

const OrdersPopup: FC<IOrdersPopup> = ({ activePopup, id, close }) => {
    return (
        <div className={`${styles.ordersPopup} ${activePopup ? styles.active : null}`}>
            <div className={styles.popupWrapper}>
                <Image
                    src="/img/ep_success-filled.svg"
                    alt="imgSuccess"
                    width={24}
                    height={24}
                    className={styles.imgSuccess}
                />
                <div className={styles.textSuccess}>
                    <Title type="h5" color="black">
                        {`Заказ ${id} успешно изменен!`}
                    </Title>
                    <Text type="reg16" color="grey">
                        Наши специалисты свяжутся с вами в течение суток
                    </Text>
                </div>
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
    );
};

export default OrdersPopup;
