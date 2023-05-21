import React, { FC } from "react";

import styles from "./styles/AccountpageCredential.module.css";
import UserAvatar from "@/src/components/shared/Avatar/Avatar";
import ButtonAuthHeader, { ButtonAuthClasses } from "@/src/components/shared/buttons/ButtonAuthHeader";
import VerifiedEmail from "@/src/components/shared/verifiedEmail/verifiedEmail";
import { useRouter } from "next/router";
import { AccountPageTypes } from "@/src/shared/enums/my-account";
import { useAppSelector } from "@/src/hooks/types";

interface IAccountPageCredential {
     email?: string;
     isEmailVerified?: boolean;
     name?: string;
     avatarUrl?: string;
     mobileNumber?: string;
     page: keyof typeof AccountPageTypes;
}

const AccountPageCredential: FC<IAccountPageCredential> = ({ isEmailVerified, email, avatarUrl, mobileNumber, name, page }) => {
     return (
          <div className={styles.credentialsWrapper}>
               <UserAvatar url={avatarUrl} type={"forSettings"} username={name} />
               <div className={styles.credentialsRightBlock}>
                    <h4>{name}</h4>
                    {mobileNumber && <p className={styles.credentialsInfo}>{mobileNumber}</p>}
                    <div className={styles.emailBlock}>
                         {<p className={styles.credentialsInfo}>{email}</p>}
                         {isEmailVerified && <VerifiedEmail />}
                    </div>
                    {page === "profile_templates" && (
                         <ButtonAuthHeader
                              className={ButtonAuthClasses.credentials}
                              href={"/my-account/profile/personaldata"}
                              text={"Редактировать"}
                         />
                    )}
               </div>
          </div>
     );
};

export default AccountPageCredential;
