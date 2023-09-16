import React, { FC, useState } from "react";
import { useChangeDataUserMutation } from "@/src/store/services/userAuth";
import Cookies from "js-cookie";
import styles from "./styles/AccountpageCredential.module.css";
import UserAvatar from "@/src/components/shared/Avatar/Avatar";
import ButtonAuthHeader, { ButtonAuthClasses } from "@/src/components/shared/buttons/ButtonAuthHeader";
import VerifiedEmail from "@/src/components/shared/verifiedEmail/verifiedEmail";
import { useRouter } from "next/router";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import { useAppSelector } from "@/src/hooks/types";
import { clientEndpoints } from "@/src/shared/routes/client-endpoints";
import Text from "@/src/components/shared/text/Text";
import Title from "@/src/components/shared/text/Title";
import { useDataUserQuery } from "@/src/store/services/userAuth";

export interface IAccountPageCredential {
    email?: string;
    isEmailVerified?: boolean;
    first_name?: string;
    last_name?: string;
    image?: string;
    phone_number?: string;
    page?: keyof typeof AccountPageTypes;
}

const AccountPageCredential: FC<IAccountPageCredential> = ({
    isEmailVerified,
    email,
    image,
    first_name,
    last_name,
    page,
    phone_number
}) => {

    const token = JSON.parse(Cookies.get("loginUser") || "[]");
    const { data } = useDataUserQuery(token);

    return (
        <div className={styles.credentialsWrapper}>
            <UserAvatar url={image} type={"forSettings"} username={first_name} />
            <div className={styles.credentialsRightBlock}>
                <div className={styles.blockName}>
                    <Title type={"h4"} color={"black"}>
                        {first_name}
                    </Title>
                    <Title type={"h4"} color={"black"}>
                        {last_name}
                    </Title>
                </div>
                <p className={styles.credentialsInfo}>{data ? data?.phone_number : ""}</p>
                <div className={styles.emailBlock}>
                    {
                        <Text type={"reg18"} color={"black"}>
                            {email}
                        </Text>
                    }
                    {isEmailVerified && <VerifiedEmail />}
                </div>
                {page === "profile_templates" && (
                    <ButtonAuthHeader
                        className={ButtonAuthClasses.credentials}
                        href={clientEndpoints.myAccount.profile.personalData}
                        text={"Редактировать"}
                    />
                )}
            </div>
        </div>
    );
};

export default AccountPageCredential;
