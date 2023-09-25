import React, { FC, FormEvent, Fragment, useState } from "react";
import Image from "next/image";
import styles from "./AccountPageHeader.module.css";
import UserInfo from "@/src/components/features/AccountPage/AccountPageHeader/UserMenu/UserInfo";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/src/hooks/types";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import Link from "next/link";
import { removeCredentials } from "@/src/store/reducers/credentialsSlice";
import Title from "@/src/components/shared/text/Title";
import Cookies from "js-cookie";
import { useDataUserQuery, useDeleteOrderMutation } from "@/src/store/services/userAuth";
import { orderCheckBox, orderDelete } from "./img/SvgConfig";
import { SelectLanguage } from "@/src/components/features/HomePage/Header/components/SelectLanguage/SelectLanguage";
import { useModal } from "@/src/hooks/useModal";
import Modal from "@/src/components/shared/modal/Modal";
import SelectionRequest from "@/src/components/entities/selectionRequest/SelectionRequest";
import DeleteOrderPopup from "@/src/pages/my-account/orders/ordersPopups/DeleteOrderPopup";

interface IHomePageHeader {
    name?: string;
    title?: string;
    id?: string | number;
    page: keyof typeof AccountPageTypes;
    orderNumber?: string;
    submitForm?: () => void;
}

const AccountPageHeader: FC<IHomePageHeader> = ({ name, title, page, orderNumber, submitForm }) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const handleToggleBurgerMenu = () => setOpen((prevState) => !prevState);
    const id = orderNumber;
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);
    const [deleteOrder, { error: errorDelete }] = useDeleteOrderMutation();
    const { isShown, toggle } = useModal();

    const handleOpenProfile = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.replace({
            pathname: "/my-account/profile",
        });
    };

    return (
        <header className={styles.headerWrapper}>
            <>
                {page === "startPage" && (
                    <Title type={"h4"} color={"black"}>
                        {title ? title : `Добро пожаловать, ${name}!`}
                    </Title>
                )}
                {page === "adminPage" && (
                    <Title type={"h4"} color={"black"}>
                        {title ? title : `Добро пожаловать, ${name}!`}
                    </Title>
                )}
                {page === "orders" && (
                    <Title type={"h4"} color={"black"}>
                        Заказы
                    </Title>
                )}
                {page === "orderEdit" && (
                    <div className={styles.orderTitle}>
                        <div className={styles.orderTitleLeft}>
                            <div className={styles.orderIconEdit}>
                                <Image
                                    src="/img/Edit_bold.svg"
                                    alt="edit"
                                    width={20}
                                    height={20}
                                    className={styles.imgEdit}
                                />
                            </div>
                            <Title type={"h4"} color={"black"}>
                                {`Заказ ${orderNumber}`}
                            </Title>
                        </div>
                        <div className={styles.orderTitleRight}>
                            <div className={styles.orderIconDelete} data-tooltip="Удалить заказ" onClick={toggle}>
                                {orderDelete}
                            </div>
                        </div>
                    </div>
                )}
                {page === "templates" && (
                    <Link href={"/my-account"}>
                        <Title type={"h4"} color={"black"}>
                            {"< Aimilogic"}
                        </Title>
                    </Link>
                )}
                {page === "favorites" && (
                    <Title type={"h4"} color={"black"}>
                        {"Избранное"}
                    </Title>
                )}
                {page === "faq" && (
                    <Title type={"h4"} color={"black"}>
                        {"FAQ"}
                    </Title>
                )}
                {page === "articles" && (
                    <Title type={"h4"} color={"black"}>
                        {"Статьи"}
                    </Title>
                )}
                {page === "tariff" && (
                    <Title type={"h4"} color={"black"}>
                        {"Тарифы"}
                    </Title>
                )}
                {(page === "profile_changeData" || page === "profile_templates") && (
                    <Title type={"h4"} color={"black"}>
                        Профиль
                    </Title>
                )}
                {(page === "profile_settings_password" || page === "profile_settings_personalData") && (
                    <Title type={"h4"} color={"black"}>
                        Настройки
                    </Title>
                )}
            </>
            <div className={styles.headerRightBlock}>
                <SelectLanguage />
                <UserInfo
                    profileOnClick={handleOpenProfile}
                    isOpen={open}
                    onClick={handleToggleBurgerMenu}
                    first_name={data?.first_name}
                    last_name={data?.last_name}
                />
            </div>
            <Modal isShown={isShown} hide={toggle}>
                <DeleteOrderPopup close={toggle} orderNumber={orderNumber} />
            </Modal>
        </header>
    );
};

export default AccountPageHeader;
