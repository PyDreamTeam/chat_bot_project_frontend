import ButtonAuthHeader, { ButtonAuthClasses } from "@/src/components/shared/buttons/ButtonAuthHeader";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import React, { useState, FormEvent } from "react";
import styles from "./HeaderRightBlock.module.css";
import { SelectLanguage } from "@/src/components/features/HomePage/Header/components/SelectLanguage/SelectLanguage";
import { useDataUserQuery } from "@/src/store/services/userAuth";
import UserInfo from "@/src/components/features/AccountPage/AccountPageHeader/UserMenu/UserInfo";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const HeaderRightBlock = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const handleToggleBurgerMenu = () => setOpen((prevState) => !prevState);
    const handleOpenProfile = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.replace({
            pathname: "/my-account/profile",
        });
    };

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data, isSuccess } = useDataUserQuery(token);

    return (
        <div className={styles.rightBlock}>
            <div className={styles.buttonsAuthWrapper}>
                <SelectLanguage />
                {isSuccess ? (
                    <UserInfo
                        first_name={data?.first_name}
                        last_name={data?.last_name}
                        isOpen={open}
                        onClick={handleToggleBurgerMenu}
                        profileOnClick={handleOpenProfile}
                    />
                ) : (
                    <div className={styles.buttonsAuthWrapper}>
                        <ButtonAuthHeader
                            text="Войти"
                            className={ButtonAuthClasses.signIn}
                            href={clientEndpoints.signIn.get}
                        />
                        <ButtonAuthHeader
                            text="Регистрация"
                            className={ButtonAuthClasses.signUp}
                            href={clientEndpoints.signUp.get}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderRightBlock;
