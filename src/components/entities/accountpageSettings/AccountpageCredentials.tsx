import React, { FC } from "react";

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

interface IAccountPageCredential {
     email: string;
     isEmailVerified: boolean;
     name: string;
     avatarUrl?: string;
     mobileNumber?: string;
     page: keyof typeof AccountPageTypes;
}

const AccountPageCredential: FC<IAccountPageCredential> = ({ isEmailVerified, email, avatarUrl, mobileNumber, name, page }) => {
     const id = useAppSelector((state) => state.credentialsSlice.credentials.id);

     return (
          <div className={styles.credentialsWrapper}>
               <UserAvatar url={avatarUrl} type={"forSettings"} username={name} />
               <div className={styles.credentialsRightBlock}>
                    <Title type={"h4"} color={"black"}>{name}</Title>
                    {mobileNumber && <p className={styles.credentialsInfo}>{mobileNumber}</p>}
                    <div className={styles.emailBlock}>
                         {<Text type={"reg18"} color={"black"}>{email}</Text>}
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