import React, { useEffect } from "react";
import styles from "../styles/FormMyAccount.module.css";
import Title from "@/src/components/shared/text/Title";
import { DataForm } from "../../../DataForm/DataForm";
import { useVerifyUserMutation } from "@/src/store/services/userAuth";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const PersonalDataForm = () => {
    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const [verifyUser, { isError }] = useVerifyUserMutation();
    const router = useRouter();

    useEffect(() => {
        verifyUser(token.access);
    }, []);
    // useEffect(() => {
    //     if (isError) {
    //         router.push("/sign-in");
    //     }
    // }, [isError]);

    return (
        <div className={styles.personalDataBlock}>
            <Title color={"black"} type={"h5"}>
                Персональные данные
            </Title>
            <DataForm />
        </div>
    );
};

export default PersonalDataForm;
