import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import styles from "./styles/DeleteOrderPopup.module.css";
import { useDeleteOrderMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { ButtonNegative } from "@/src/components/shared/buttons/ButtonNegative";
import { ButtonCancel } from "@/src/components/shared/buttons/ButtonCancel";

interface IPropsPopup {
    open?: () => void;
    close?: () => void;
    orderNumber?: string;
}

const DeleteOrderPopup: FC<IPropsPopup> = ({ close, open, orderNumber }) => {
    const [deleteOrder, { error: errorDelete }] = useDeleteOrderMutation();
    const id = orderNumber;
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

    useEffect(() => {
        return () => clearTimeout(timerRef.current as NodeJS.Timeout);
    }, []);

    return (
        <div className={styles.container}>
            <Image
                src="/sign/close.svg"
                alt="close"
                width={34}
                height={34}
                onClick={close}
                className={styles.imgClose}
            />
            <Image src="/img/Delete.svg" alt="imgSuccess" width={56} height={56} />
            <div className={styles.textBlock}>
                <Title type="h5" color="black">
                    Удалить заказ
                </Title>
                <Text type="reg16" color="grey">
                    {`Вы действительно хотите удалить Заказ ${id}?`}
                </Text>
            </div>
            <div className={styles.buttonsContainer}>
                <ButtonCancel type={"button"} active={true} onClick={close} width={240}>
                    Отмена
                </ButtonCancel>
                <ButtonNegative
                    type={"button"}
                    active={true}
                    onClick={() => {
                        Cookies.set("Deleted_order", `${id}`);
                        deleteOrder({ token, id }).then(() => router.push("/my-account/orders"));
                        close;
                    }}
                    width={240}
                >
                    Удалить
                </ButtonNegative>
            </div>
        </div>
    );
};

export default DeleteOrderPopup;
